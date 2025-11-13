// Ultra-lightweight terrain + flower scene
// - Balanced fog & haze
// - Red/white flower fields
// - Enhanced terrain (AO/tint/rim)
// - Slightly raised sand near water edge
// - Light airy reflective water (sky-like transparency)
// - Postprocessing bloom + shimmer

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

export default function BackgroundScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0xddefff, 1);
    container.appendChild(renderer.domElement);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(0, 40, 80);
    camera.lookAt(0, 0, 0);

    // --- Skybox ---
    const cubeLoader = new THREE.CubeTextureLoader();
    const skybox = cubeLoader.load([
      "skybox/px.jpg",
      "skybox/nx.jpg",
      "skybox/py.jpg",
      "skybox/ny.jpg",
      "skybox/pz.jpg",
      "skybox/nz.jpg",
    ]);
    scene.background = skybox;

    // --- Fog ---
    scene.fog = new THREE.Fog(0xddefff, 120, 280);

    // --- Postprocessing chain ---
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // Bloom
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.18,
      0.35,
      0.88
    );
    composer.addPass(bloomPass);

    // Shimmer / glisten pass
    const glistenShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
        intensity: { value: 0.07 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float intensity;
        varying vec2 vUv;

        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){
          vec2 i=floor(p);vec2 f=fract(p);
          float a=hash(i);float b=hash(i+vec2(1.0,0.0));
          float c=hash(i+vec2(0.0,1.0));float d=hash(i+vec2(1.0,1.0));
          vec2 u=f*f*(3.0-2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }
        void main(){
          vec4 base=texture2D(tDiffuse,vUv);
          float shimmer=noise(vUv*15.0+vec2(time*0.3,time*0.2));
          shimmer=pow(shimmer,8.0);
          float luma=dot(base.rgb,vec3(0.299,0.587,0.114));
          float mask=smoothstep(0.55,1.0,luma);
          vec3 result=base.rgb+mask*shimmer*intensity*vec3(1.2,1.25,1.3);
          gl_FragColor=vec4(result,base.a);
        }`,
    };
    const glistenPass = new ShaderPass(glistenShader);
    composer.addPass(glistenPass);

    // Mild color grade
    const colorGradeShader = {
      uniforms: {
        tDiffuse: { value: null },
        contrast: { value: 1.04 },
        brightness: { value: 1.02 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv=uv;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float contrast;
        uniform float brightness;
        varying vec2 vUv;
        void main(){
          vec4 texel=texture2D(tDiffuse,vUv);
          vec3 color=texel.rgb;
          color=(color-0.5)*contrast+0.5;
          color*=brightness;
          gl_FragColor=vec4(color,texel.a);
        }`,
    };
    composer.addPass(new ShaderPass(colorGradeShader));

    // --- Textures ---
    const texLoader = new THREE.TextureLoader();
    const scale = 20;
    const loadTex = (url) => {
      const tex = texLoader.load(url);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(scale, scale);
      return tex;
    };
    const grassAlbedo = loadTex("grass/albedo.jpg");
    const sandAlbedo = loadTex("sand/albedo.jpg");

    // --- Terrain geometry ---
    const terrainGeo = new THREE.PlaneGeometry(400, 400, 96, 96);
    terrainGeo.rotateX(-Math.PI / 2);
    const pos = terrainGeo.attributes.position;
    const basePos = pos.array.slice();
    const scaleN = 0.05;
    const amplitude = 10;
    const seed = Math.random() * 100;
    const noise = new ImprovedNoise();

    // --- Enhanced terrain shader (slightly raised sand) ---
    const terrainMat = new THREE.ShaderMaterial({
      uniforms: {
        grassMap: { value: grassAlbedo },
        sandMap: { value: sandAlbedo },
        waterHeight: { value: -1.9 }, // was -2.5, slightly raised
        blendRange: { value: 3.0 },   // gentle transition
        desaturate: { value: 0.2 },
        lightDir: { value: new THREE.Vector3(0.4, 1.0, 0.3).normalize() },
        fogColor: { value: new THREE.Color(0xddefff) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying float vDist;
        void main(){
          vUv=uv*20.0;
          vHeight=position.y;
          vNormal=normalize(normalMatrix*normal);
          vec4 worldPos=modelMatrix*vec4(position,1.0);
          vWorldPos=worldPos.xyz;
          vDist=length(worldPos.xz);
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform sampler2D grassMap;
        uniform sampler2D sandMap;
        uniform float waterHeight;
        uniform float blendRange;
        uniform float desaturate;
        uniform vec3 lightDir;
        uniform vec3 fogColor;
        varying vec2 vUv;
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying float vDist;

        void main(){
          vec3 grass=texture2D(grassMap,vUv).rgb;
          vec3 sand=texture2D(sandMap,vUv).rgb;
          float t=smoothstep(waterHeight-blendRange,waterHeight+blendRange,vHeight);
          vec3 base=mix(sand,grass,t);

          float diff=max(dot(vNormal,lightDir),0.0);
          vec3 litColor=base*(0.45+diff*0.9);

          float slope=1.0-abs(vNormal.y);
          float ao=smoothstep(0.0,1.0,slope+(vHeight+10.0)*0.03);
          litColor*=0.9-0.25*ao;

          vec3 lowTint=vec3(0.85,0.9,1.05);
          vec3 highTint=vec3(1.1,1.05,0.95);
          float heightMix=smoothstep(-5.0,15.0,vHeight);
          litColor*=mix(lowTint,highTint,heightMix);

          float rim=pow(1.0-max(dot(vNormal,normalize(lightDir)),0.0),3.0);
          litColor+=rim*0.12;

          float gray=dot(litColor,vec3(0.299,0.587,0.114));
          litColor=mix(litColor,vec3(gray),desaturate);

          float heightFog=smoothstep(-5.0,25.0,vHeight);
          litColor=mix(litColor,mix(fogColor,litColor,0.85),heightFog*0.3);
          float edgeFog=smoothstep(180.0,220.0,vDist);
          litColor=mix(litColor,mix(fogColor,litColor,0.8),edgeFog*0.4);

          gl_FragColor=vec4(litColor,1.0);
        }`,
    });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    scene.add(terrain);

    // --- Light airy reflective water shader ---
    const waterMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        skyColor: { value: new THREE.Color(0xe3f3ff) },
        deepColor: { value: new THREE.Color(0x73c6ff) },
        lightDir: { value: new THREE.Vector3(0.4, 1.0, 0.3).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main(){
          vUv = uv * 4.0;
          vWorldPos = (modelMatrix * vec4(position,1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform float time;
        uniform vec3 skyColor;
        uniform vec3 deepColor;
        uniform vec3 lightDir;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
        float noise(vec2 p){
          vec2 i=floor(p); vec2 f=fract(p);
          float a=hash(i); float b=hash(i+vec2(1.0,0.0));
          float c=hash(i+vec2(0.0,1.0)); float d=hash(i+vec2(1.0,1.0));
          vec2 u=f*f*(3.0-2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }

        void main(){
          float n = noise(vUv*3.0 + vec2(time*0.25, time*0.18));
          n += noise(vUv*8.0 - vec2(time*0.15, time*0.1))*0.3;

          float depth = smoothstep(-3.0, 1.0, vWorldPos.y);
          vec3 color = mix(deepColor, skyColor, depth);

          vec3 viewDir = normalize(vec3(0.0, 1.0, 1.0));
          float fres = pow(1.0 - dot(viewDir, vec3(0.0,1.0,0.0)), 3.0);
          vec3 reflection = mix(vec3(0.0), skyColor * 2.0, fres);
          color += reflection * 0.5;

          float highlight = smoothstep(0.82, 1.0, n);
          color += highlight * vec3(0.2, 0.25, 0.28);

          color *= 0.96 + n * 0.04;

          gl_FragColor = vec4(color, 0.45);
        }`,
      transparent: true,
    });

    const water = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400).rotateX(-Math.PI / 2),
      waterMat
    );
    water.position.y = -2.5;
    scene.add(water);

    // --- Flowers ---
    const whiteMat = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const redMat = new THREE.MeshBasicMaterial({ color: "#e04545" });
    const centerMat = new THREE.MeshBasicMaterial({ color: "#ffc94c" });
    const petal = new THREE.ConeGeometry(0.08, 0.19, 5).translate(0, 0.1, 0);
    const center = new THREE.SphereGeometry(0.055, 6, 6).translate(0, 0.12, 0);

    function makeFlower(colorMat) {
      const group = new THREE.Group();
      for (let i = 0; i < 6; i++) {
        const p = new THREE.Mesh(petal, colorMat);
        const ang = (i / 6) * Math.PI * 2;
        p.position.set(Math.cos(ang) * 0.1, 0, Math.sin(ang) * 0.1);
        p.rotation.set(Math.PI / 2, ang, 0);
        group.add(p);
      }
      group.add(new THREE.Mesh(center, centerMat));
      return group;
    }

    const fieldNoise = new ImprovedNoise();
    const redThresh = 0.08;
    const whiteThresh = -0.08;
    const falloff = 0.2;
    const flowers = [];
    const count = 6000;
    const waterLine = -2.0;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 400;
      const z = (Math.random() - 0.5) * 400;
      const d = fieldNoise.noise(x * 0.015, z * 0.015, seed * 0.5);
      const r = Math.max((d - redThresh) / falloff, 0);
      const w = Math.max((-d - (-whiteThresh)) / falloff, 0);
      const roll = Math.random();
      let f = null;
      let strength = 0;
      if (r > w && roll < r) { f = makeFlower(redMat); strength = r; }
      else if (w >= r && roll < w) { f = makeFlower(whiteMat); strength = w; }
      else continue;
      const s = THREE.MathUtils.lerp(0.5, 1.0, strength);
      f.scale.set(s, s, s);
      f.position.set(x, 0, z);
      scene.add(f);
      flowers.push({ obj: f, x, z });
    }

    // --- Animation ---
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      glistenPass.uniforms.time.value = t;
      waterMat.uniforms.time.value = t;
      const time = t * 0.13;

      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = basePos[ix];
        const z = basePos[ix + 2];
        pos.array[ix + 1] =
          noise.noise(x * scaleN, z * scaleN, seed + time) * amplitude;
      }
      pos.needsUpdate = true;

      flowers.forEach(({ obj, x, z }) => {
        const y = noise.noise(x * scaleN, z * scaleN, seed + time) * amplitude;
        obj.visible = y >= waterLine;
        if (obj.visible) {
          obj.position.y = y;
          obj.rotation.y = Math.sin(t * 1.2 + (x + z) * 0.04) * 0.03;
        }
      });

      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      composer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}

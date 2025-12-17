// src/components/Background3D.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // ----------------------------------------------------
    // RENDERER
    // ----------------------------------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.pointerEvents = "none";

    // ----------------------------------------------------
    // SCENE & CAMERA
    // ----------------------------------------------------
    const scene = new THREE.Scene();

    const fogColor = new THREE.Color("#8fd8c8");
    const fogNear = 45;
    const fogFar = 220;
    scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1800);
    camera.position.set(0, 22, 55);
    camera.lookAt(0, -6, -40);

    // ----------------------------------------------------
    // SKY — teal gradient + fog tint + high-frequency grain
    // ----------------------------------------------------
    const skyGeo = new THREE.SphereGeometry(1100, 32, 32);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color("#1b7e70") },
        midColor: { value: new THREE.Color("#55c7b8") },
        bottomColor: { value: new THREE.Color("#e5fff2") },
        fogColor: { value: fogColor },
      },
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position,1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        uniform vec3 fogColor;
        varying vec3 vWorld;

        void main(){
          vec3 d = normalize(vWorld);
          float h = d.y * 0.5 + 0.5;

          vec3 col = mix(bottomColor, midColor, smoothstep(0.0, 0.6, h));
          col = mix(col, topColor, smoothstep(0.6, 1.0, h));

          // fog tint near horizon
          float fogAmt = smoothstep(0.0, 0.6, 1.0 - h);
          col = mix(col, fogColor, fogAmt * 0.35);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    scene.add(new THREE.Mesh(skyGeo, skyMat));

    // ----------------------------------------------------
    // POSTPROCESSING — bloom slightly stronger
    // ----------------------------------------------------
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
      new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.34,
        0.46,
        0.88
      )
    );

    // ----------------------------------------------------
    // NOISE
    // ----------------------------------------------------
    const noise = new ImprovedNoise();
    const seed = Math.random() * 100;

    // ----------------------------------------------------
    // TERRAIN — unchanged (with built-in grain)
    // ----------------------------------------------------
    const terrainGeo = new THREE.PlaneGeometry(400, 400, 260, 260);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    const base = pos.array.slice();

    const amplitude = 13.5;
    const n1 = 0.055;
    const n2 = 0.11;
    const n3 = 0.25;
    const speed1 = 0.10;
    const speed2 = 0.06;
    const speed3 = 0.02;

    const asymmetry = (x, z) => {
      const nx = (x + 200.0) / 400.0;
      const nz = (z + 200.0) / 400.0;
      return 0.4 + nx * 0.5 + nz * 0.55;
    };

    const terrainMat = new THREE.ShaderMaterial({
      uniforms: {
        lightDir: { value: new THREE.Vector3(0.4, 1.0, 0.25).normalize() },
        colorSand: { value: new THREE.Color("#d7c9ae") },
        colorGrass: { value: new THREE.Color("#4b8254") },
        colorTeal: { value: new THREE.Color("#5da5ae") },
        contrast: { value: 1.18 },
        fogColor: { value: fogColor },
        fogNear: { value: fogNear },
        fogFar: { value: fogFar },
      },
      fog: true,
      vertexShader: `
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          vHeight = wp.y;
          gl_Position = projectionMatrix * modelViewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 colorSand;
        uniform vec3 colorGrass;
        uniform vec3 colorTeal;
        uniform vec3 lightDir;
        uniform float contrast;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorld;

        float band(float v){
          if (v < 0.35) return 0.22;
          if (v < 0.7)  return 0.65;
          return 1.0;
        }

        void main(){
          float t1 = smoothstep(-12.0,  2.0, vHeight);
          float t2 = smoothstep( 2.0, 20.0, vHeight);
          vec3 base = mix(colorSand, colorGrass, t1);
          base = mix(base, colorTeal, t2);
          float ndl = dot(normalize(vNormal), normalize(lightDir));
          float diff = band(ndl * 0.5 + 0.5);
          vec3 shaded = base * diff * contrast;
          float tx = sin(vWorld.x * 0.2 + vWorld.z * 0.15) * 0.02;
          float ty = sin(vWorld.x * 0.08 - vWorld.z * 0.22) * 0.016;
          shaded *= (1.0 + tx + ty);
          float rim = 1.0 - max(dot(normalize(vNormal), vec3(0,1,0)), 0.0);
          shaded += smoothstep(0.45, 1.0, rim) * 0.16;
          float d = length(vWorld.xz);
          float f = smoothstep(fogNear, fogFar, d);
          shaded = mix(shaded, fogColor, f * 0.45);
          gl_FragColor = vec4(shaded, 1.0);
        }
      `,
    });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    scene.add(terrain);

    // ----------------------------------------------------
    // WATER — transparent + blue + monochrome grain
    // ----------------------------------------------------
    const waterGeo = new THREE.PlaneGeometry(400, 400);
    waterGeo.rotateX(-Math.PI / 2);

    const waterMat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        shallow: { value: new THREE.Color("#cff2ff") },
        deep: { value: new THREE.Color("#5caadc") },
        fogColor: { value: fogColor },
        fogNear: { value: fogNear },
        fogFar: { value: fogFar },
      },
      transparent: true,
      fog: true,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorld;
        void main(){
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 shallow;
        uniform vec3 deep;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;
        varying vec3 vWorld;

        float hash(vec2 p){
          return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);
        }
        float noise2d(vec2 p){
          vec2 i = floor(p), f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0));
          float d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0 - 2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }

        void main(){
          float n = noise2d(vUv * 3.5 + vec2(time * 0.12, time * 0.1));
          vec3 col = mix(deep, shallow, 0.55 + n * 0.25);

          float d = length(vWorld.xz);
          float f = smoothstep(fogNear, fogFar, d);
          col = mix(col, fogColor, f * 0.55);
          gl_FragColor = vec4(col, 0.34);
        }
      `,
    });

    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.y = -1.2;
    scene.add(water);

    // ----------------------------------------------------
    // MOTES
    // ----------------------------------------------------
    const moteCount = 1800;
    const moteGeo = new THREE.BufferGeometry();
    const motePositions = new Float32Array(moteCount * 3);
    const moteBaseY = new Float32Array(moteCount);
    const motePhase = new Float32Array(moteCount);
    const moteSize = new Float32Array(moteCount);
    for (let i = 0; i < moteCount; i++) {
      const ix = i * 3;
      motePositions[ix] = (Math.random() - 0.5) * 260;
      motePositions[ix + 1] = 1.3 + Math.random() * 6.0;
      motePositions[ix + 2] = (Math.random() - 0.5) * 260;
      moteBaseY[i] = motePositions[ix + 1];
      motePhase[i] = Math.random() * Math.PI * 2.0;
      moteSize[i] = 0.65 + Math.random() * 0.9;
    }
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
    moteGeo.setAttribute("aBaseY", new THREE.BufferAttribute(moteBaseY, 1));
    moteGeo.setAttribute("aPhase", new THREE.BufferAttribute(motePhase, 1));
    moteGeo.setAttribute("aSize", new THREE.BufferAttribute(moteSize, 1));
    const moteMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aBaseY;
        attribute float aPhase;
        attribute float aSize;
        uniform float time;
        varying float vAlpha;
        varying float vPhase;
        void main(){
          vPhase = aPhase;
          vec3 pos = position;
          pos.y = aBaseY + sin(time * 0.9 + aPhase) * 0.5;
          pos.x += sin(time * 0.15 + aPhase * 1.3) * 0.5;
          pos.z += cos(time * 0.12 + aPhase * 1.5) * 0.5;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPos;
          float dist = length(pos.xz);
          vAlpha = 1.0 - smoothstep(110.0, 240.0, dist);
          gl_PointSize = aSize * (260.0 / -mvPos.z);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vAlpha;
        varying float vPhase;
        void main(){
          float flick = 0.84 + sin(time * 0.8 + vPhase * 4.0) * 0.14;
          gl_FragColor = vec4(vec3(1.0), vAlpha * flick);
        }
      `,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    motes.position.y = 0.3;
    scene.add(motes);

    // ----------------------------------------------------
    // ANIMATION LOOP
    // ----------------------------------------------------
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = base[ix];
        const z = base[ix + 2];
        const asym = asymmetry(x, z);
        const h1 = noise.noise(x * n1, z * n1, seed + t * speed1) * amplitude;
        const h2 = noise.noise(x * n2, z * n2, seed * 1.7 + t * speed2) * amplitude * 0.6;
        const h3 = noise.noise((x + 50.0) * n3, (z - 30.0) * n3, seed * 2.3 + t * speed3) * amplitude * 0.35;
        pos.array[ix + 1] = (h1 + h2 + h3) * asym;
      }
      pos.needsUpdate = true;
      waterMat.uniforms.time.value = t;
      moteMat.uniforms.time.value = t;
      motes.rotation.y = t * 0.01;
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}

import React, { useEffect, useRef } from "react";
import Section from "../components/Section";
import * as THREE from "three";

export default function OntographyDiagramSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let currentAnchor = new THREE.Vector3(0, 0, 0);

    function getNodeColor(depth, maxDepth) {
      const t = Math.min(depth / maxDepth, 1);
      const pureBlue = new THREE.Color(0x0000ff);
      const pureGreen = new THREE.Color(0x00ff00);
      return pureBlue.clone().lerp(pureGreen, t);
    }

    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfafafa);

    const getSize = () => ({
      w: container.clientWidth,
      h: container.clientHeight,
    });
    let { w: width, h: height } = getSize();

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    const spherical = { radius: 150, phi: Math.PI / 2, theta: 0 };

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const groundGeom = new THREE.PlaneGeometry(600, 600, 20, 20);
    const groundMat = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -10;
    scene.add(ground);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    let nodesById = {};
    let dataById = {};
    let currentNodeId = null;

const localCSV = `id,label,connections
A,hello.world,"B|C|D|E"

B,System Logic,"B1|B2|B3"
B1,State Engine,"B1a|B1b"
B1a,Dynamic Parameters,""
B1b,Session Persistence,""
B2,Procedural Systems,"B2a|B2b"
B2a,Noise-Based Terrain,""
B2b,Object Rules,""
B3,Simulation Loop,"B3a|B3b"
B3a,Frame Updates,""
B3b,Synchronization,""

C,Visualization,"C1|C2|C3"
C1,3D Rendering,"C1a|C1b"
C1a,Graphics Pipeline,""
C1b,Post-Processing Effects,""
C2,Shaders & Materials,"C2a|C2b"
C2a,PBR Textures,""
C2b,Custom GLSL Shaders,""
C3,Optimization,"C3a|C3b"
C3a,Frustum Culling,""
C3b,Detail (LOD),""

D,AI Mediation,"D1|D2|D3"
D1,Language Understanding,"D1a|D1b"
D1a,Prompt Parsing,""
D1b,Command Contextualization,""
D2,Generative Agents,"D2a|D2b"
D2a,Intent Recognition,""
D2b,Behavior Trees,""
D3,Procedural Narrative,"D3a|D3b"
D3a,Story Node Linking,""
D3b,Adaptive Quest Logic,""

E,Collaboration,"E1|E2|E3"
E1,Multiplayer Systems,"E1a|E1b"
E1a,P2P,""
E1b,Session Tokens,""
E2,Cloud,"E2a|E2b"
E2a,Asset Streaming,""
E2b,Data Persistence,""
E3,Collaboration Tools,"E3a|E3b"
E3a,Shared Editing,""
E3b,State Merge,""`;


function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  lines.shift(); // Remove header row
  return lines
    .map((line) => {
      const cols = line.split(",");
      const id = cols[0]?.trim();
      const label = cols[1]?.trim();
      // Safely handle optional or missing connections column
      const connString = cols.slice(2).join(",").replace(/"/g, "").trim();
      const connections = connString
        ? connString.split("|").map((s) => s.trim()).filter(Boolean)
        : [];
      if (!id || !label) return null;
      return { id, label, connections };
    })
    .filter(Boolean);
}


    const localNodes = parseCSV(localCSV);

    function makeLabel(text) {
      const fontSize = 28;
      const padding = 20;
      const measureCanvas = document.createElement("canvas");
      const mctx = measureCanvas.getContext("2d");
      mctx.font = `${fontSize}px monospace`;
      const textWidth = mctx.measureText(text).width;
      const scale = 10;
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil((textWidth + padding * 2) * scale);
      canvas.height = Math.ceil((fontSize + padding * 2) * scale);
      const ctx = canvas.getContext("2d");
      ctx.scale(scale, scale);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / (2 * scale), canvas.height / (2 * scale));
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(Math.max(12, textWidth * 0.2), fontSize * 0.35, 1);
      return sprite;
    }

    function highlightActivePill(id) {
      const pills = document.querySelectorAll(".about-pills-box .pill");
      pills.forEach((pill) => {
        pill.classList.toggle("active-pill", pill.dataset.id === id);
      });
    }

    function computeMaxDepth(nodeId, depth = 0) {
      const node = dataById[nodeId];
      if (!node || !node.connections?.length) return depth;
      return Math.max(...node.connections.map((c) => computeMaxDepth(c, depth + 1)));
    }

    function buildTree(nodes) {
      group.clear();
      nodesById = {};
      dataById = {};
      nodes.forEach((n) => (dataById[n.id] = n));
      const root = nodes[0];
      const maxDepth = computeMaxDepth(root.id);

      function placeNode(id, depth = 0, parent = null, index = 0, total = 1, parentDir = new THREE.Vector3(0, 1, 0)) {
        const node = dataById[id];
        if (!node) return;
        const nodeColor = getNodeColor(depth, maxDepth);
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(1.2, 24, 24),
          new THREE.MeshBasicMaterial({ color: nodeColor })
        );
        const baseRadius = 25;
        const radius = baseRadius * (1 + depth * 1.2);
        if (parent) {
          const up = new THREE.Vector3(0, 1, 0);
          let tangent = new THREE.Vector3().crossVectors(parentDir, up);
          if (tangent.length() < 0.001) tangent = new THREE.Vector3(1, 0, 0);
          tangent.normalize();
          const binormal = new THREE.Vector3().crossVectors(parentDir, tangent);
          const angle = (index / total) * Math.PI * 2;
          const tiltAngle = THREE.MathUtils.degToRad(30);
          const tiltedDir = parentDir.clone().applyAxisAngle(tangent, tiltAngle).normalize();
          const localDir = new THREE.Vector3()
            .addScaledVector(tangent, Math.cos(angle) * radius)
            .addScaledVector(binormal, Math.sin(angle) * radius)
            .addScaledVector(tiltedDir, radius);
          mesh.position.copy(parent.position).add(localDir);
        } else mesh.position.set(0, 0, 0);
        group.add(mesh);
        nodesById[id] = mesh;
        const label = makeLabel(node.label);
        label.position.set(mesh.position.x, mesh.position.y + 3, mesh.position.z);
        group.add(label);
        if (parent) {
          const line = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([parent.position.clone(), mesh.position.clone()]),
            new THREE.LineBasicMaterial({ color: parent.material.color })
          );
          group.add(line);
        }
        const kids = node.connections || [];
        if (kids.length) {
          const newDir = parent
            ? mesh.position.clone().sub(parent.position).normalize()
            : new THREE.Vector3(0, 1, 0);
          kids.forEach((child, i) => placeNode(child, depth + 1, mesh, i, kids.length, newDir));
        }
      }

      placeNode(root.id);
      focusOnNode(root.id);
      populatePills(nodes);
    }

    function populatePills(nodes) {
      const pillsContainer = document.querySelector(".about-pills-box");
      pillsContainer.innerHTML = "";
      nodes.forEach((node) => {
        const pill = document.createElement("span");
        pill.className = "pill";
        pill.textContent = node.label;
        pill.dataset.id = node.id;
        pill.addEventListener("click", () => focusOnNode(node.id));
        pillsContainer.appendChild(pill);
      });
      if (currentNodeId) highlightActivePill(currentNodeId);
    }

    function focusOnNode(id) {
      const target = nodesById[id];
      if (!target) return;
      currentNodeId = id;
      currentAnchor.copy(target.position);
      spherical.radius = 80;
      spherical.phi = Math.PI / 2;
      spherical.theta = 0;
      highlightActivePill(id);
    }

    let isDragging = false;
    let lastX = 0, lastY = 0;
    container.addEventListener("mousedown", (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      spherical.theta -= dx * 0.005;
      spherical.phi -= dy * 0.005;
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
    });

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      spherical.radius += e.deltaY * 0.3;
      spherical.radius = Math.max(20, Math.min(400, spherical.radius));
    }, { passive: false });

    function animate() {
      requestAnimationFrame(animate);
      const x = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      const y = spherical.radius * Math.cos(spherical.phi);
      const z = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.set(currentAnchor.x + x, currentAnchor.y + y, currentAnchor.z + z);
      camera.lookAt(currentAnchor);
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
      const s = getSize();
      width = s.w;
      height = s.h;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    buildTree(localNodes);
    animate();

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <Section title={null} overrideStyles>
      <div className="flex flex-col w-full h-full bg-white relative overflow-hidden">
        <div ref={containerRef} className="w-full h-full" />
        <div
          className="
            about-pills-box
            absolute bottom-0 left-0 right-0
            flex gap-3 py-4 px-6
            overflow-x-auto
            bg-black/5 backdrop-blur-md
            whitespace-nowrap
            border-t border-gray-200
            scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent
          "
        ></div>
      </div>
    </Section>
  );
}

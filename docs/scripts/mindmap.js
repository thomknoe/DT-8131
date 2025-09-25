let currentAnchor = new THREE.Vector3(0, 0, 0);

//
// Color Interpolation
//
function getNodeColor(depth, maxDepth) {
  const t = Math.min(depth / maxDepth, 1);
  const pureBlue = new THREE.Color(0x0000ff);
  const pureGreen = new THREE.Color(0x00ff00);
  return pureBlue.clone().lerp(pureGreen, t);
}

(function () {
  const container = document.getElementById("three-sketch");
  if (!container) {
    console.warn("mindmap: #three-sketch container not found.");
    return;
  }

  //
  // Scene & Camera
  //
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfafafa);

  function getSize() {
    return {
      w: container.clientWidth || window.innerWidth,
      h: container.clientHeight || window.innerHeight,
    };
  }
  let { w: width, h: height } = getSize();

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
  const spherical = { radius: 150, phi: Math.PI / 2, theta: 0 };

  //
  // Renderer
  //
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  //
  // Scene Contents
  //
  const group = new THREE.Group();
  scene.add(group);

  const groundGeom = new THREE.PlaneGeometry(600, 600, 20, 20);
  const groundMat = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    wireframe: true,
  });
  const ground = new THREE.Mesh(groundGeom, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -10;
  scene.add(ground);

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));

  //
  // State
  //
  let nodesById = {};
  let dataById = {};
  let currentNodeId = null;

  //
  // CSV Helpers
  //
  function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    lines.shift();
    return lines
      .map((line) => {
        const cols = line.split(",");
        return {
          id: cols[0].trim(),
          label: cols[1].trim(),
          connections: cols[2]
            ? cols[2]
                .replace(/"/g, "")
                .split("|")
                .map((s) => s.trim())
            : [],
        };
      })
      .filter((r) => r.id);
  }

  async function loadCSV(path) {
    try {
      const res = await fetch(path);
      return parseCSV(await res.text());
    } catch {
      return null;
    }
  }

  const fallbackCSV = `id,label,connections
A,Design,"B|C|D"
B,Systems,"E|F"
C,Technology,"G|H|I"
D,Worldbuilding,"J|K"
E,Interaction,"L|M"
F,Participation,"N|O"
G,AI,"P|Q"
H,Networks,"R|S"
I,Interfaces,"T|U"
J,Mythology,"V|W"
K,Environment,"X|Y"
L,Feedback,""
M,Collaboration,""
N,Governance,""
O,Community,""
P,Automation,""
Q,Ethics,""
R,Distributed,""
S,Protocols,""
T,UX,""
U,Visualization,""
V,Stories,""
W,Symbols,""
X,Ecology,""
Y,Urban,""
`;

  //
  // Label Maker
  //
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
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(Math.max(12, textWidth * 0.2), fontSize * 0.35, 1);
    return sprite;
  }

  function highlightActivePill(id) {
    const pills = document.querySelectorAll(".about-pills-box .pill");
    pills.forEach((pill) => {
      if (pill.dataset.id === id) pill.classList.add("active-pill");
      else pill.classList.remove("active-pill");
    });
  }

  //
  // Tree Utilities
  //
  function computeMaxDepth(nodeId, depth = 0) {
    const node = dataById[nodeId];
    if (!node || !node.connections || node.connections.length === 0)
      return depth;
    return Math.max(
      ...node.connections.map((child) => computeMaxDepth(child, depth + 1))
    );
  }

  function buildTree(nodes) {
    group.clear();
    nodesById = {};
    dataById = {};
    nodes.forEach((n) => (dataById[n.id] = n));

    const root = nodes[0];
    const maxDepth = computeMaxDepth(root.id);

    function placeNode(
      id,
      depth = 0,
      parent = null,
      index = 0,
      total = 1,
      parentDir = new THREE.Vector3(0, 1, 0)
    ) {
      const node = dataById[id];
      if (!node) return;

      const nodeColor = getNodeColor(depth, maxDepth);
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 24, 24),
        new THREE.MeshBasicMaterial({ color: nodeColor })
      );

      const baseRadius = 15;
      const radius = baseRadius * (1 + depth * 0.5);

      if (parent) {
        const up = new THREE.Vector3(0, 1, 0);
        let tangent = new THREE.Vector3().crossVectors(parentDir, up);
        if (tangent.length() < 0.001) tangent = new THREE.Vector3(1, 0, 0);
        tangent.normalize();
        const binormal = new THREE.Vector3().crossVectors(parentDir, tangent);

        const angle = (index / total) * Math.PI * 2;
        const tiltAngle = THREE.MathUtils.degToRad(30);
        const tiltedDir = parentDir
          .clone()
          .applyAxisAngle(tangent, tiltAngle)
          .normalize();

        const localDir = new THREE.Vector3()
          .addScaledVector(tangent, Math.cos(angle) * radius)
          .addScaledVector(binormal, Math.sin(angle) * radius)
          .addScaledVector(tiltedDir, radius);

        mesh.position.copy(parent.position).add(localDir);
      } else {
        mesh.position.set(0, 0, 0);
      }

      group.add(mesh);
      nodesById[id] = mesh;

      const label = makeLabel(node.label);
      label.position.set(mesh.position.x, mesh.position.y + 3, mesh.position.z);
      group.add(label);

      if (parent) {
        const lineMat = new THREE.LineBasicMaterial({
          color: parent.material.color,
          linewidth: 3,
        });
        const lineGeom = new THREE.BufferGeometry().setFromPoints([
          parent.position.clone(),
          mesh.position.clone(),
        ]);
        const line = new THREE.Line(lineGeom, lineMat);
        group.add(line);
      }

      const kids = node.connections || [];
      if (kids.length) {
        const newDir = parent
          ? mesh.position.clone().sub(parent.position).normalize()
          : new THREE.Vector3(0, 1, 0);
        kids.forEach((child, i) =>
          placeNode(child, depth + 1, mesh, i, kids.length, newDir)
        );
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

  //
  // Mouse Controls
  //
  let isDragging = false;
  let lastX = 0,
    lastY = 0;

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

  container.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      spherical.radius += e.deltaY * 0.3;
      spherical.radius = Math.max(20, Math.min(400, spherical.radius));
    },
    { passive: false }
  );

  //
  // Render Loop
  //
  function animate() {
    requestAnimationFrame(animate);

    const x =
      spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
    const y = spherical.radius * Math.cos(spherical.phi);
    const z =
      spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);

    camera.position.set(
      currentAnchor.x + x,
      currentAnchor.y + y,
      currentAnchor.z + z
    );
    camera.lookAt(currentAnchor);

    renderer.render(scene, camera);
  }

  //
  // Resize
  //
  window.addEventListener("resize", () => {
    const s = getSize();
    width = s.w;
    height = s.h;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  //
  // Init
  //
  (async function init() {
    let nodes = await loadCSV("/scripts/data/mindmap.csv");
    if (!nodes) nodes = parseCSV(fallbackCSV);
    buildTree(nodes);
    animate();
  })();
})();

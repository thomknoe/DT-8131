//
// Setup Scene & Camera
//
const canvas = document.getElementById("bg-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//
// Renderer
//
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.display = "block";

//
// Lighting
//
const light = new THREE.DirectionalLight(0xffffff, 0.9);
light.position.set(0.5, 1, 0.8);
scene.add(light);

const amb = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(amb);

//
// Plane Geometry
//
const planeWidth = 320;
const planeHeight = 140;
const segX = 360;
const segY = 220;
const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, segX, segY);

//
// Noise Setup
//
const simplex = new SimplexNoise();
let noiseScale = 0.15;
let noiseHeight = 3.0;
let timeSpeed = 0.00035;

//
// Vertex Colors
//
const count = geometry.attributes.position.count;
const colors = new Float32Array(count * 3);
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

//
// Material & Mesh
//
const material = new THREE.MeshPhongMaterial({
  vertexColors: true,
  side: THREE.DoubleSide,
  shininess: 10,
});
const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI / 2;
plane.position.y = 10;
scene.add(plane);

//
// Camera Position
//
camera.position.set(0, 26, 90);
camera.lookAt(0, 25, 0);

//
// Color Utilities
//
function lerp(a, b, t) {
  return a + (b - a) * t;
}
const deepBlue = [0.02, 0.07, 0.55];
const lightGreen = [0.6, 0.93, 0.55];

//
// Initial Noise
//
(function initialNoise() {
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const n = simplex.noise2D(x * noiseScale, y * noiseScale) * noiseHeight;
    pos.setZ(i, n);
  }
  pos.needsUpdate = true;
})();

//
// Animation Loop
//
function animate() {
  requestAnimationFrame(animate);

  const positions = geometry.attributes.position;
  const colorAttr = geometry.attributes.color;
  const tNow = performance.now() * timeSpeed;

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const n =
      simplex.noise3D(x * noiseScale, y * noiseScale, tNow) * noiseHeight;

    positions.setZ(i, n);

    let t = (n + noiseHeight) / (2 * noiseHeight);
    t = Math.max(0, Math.min(1, t));

    const r = lerp(deepBlue[0], lightGreen[0], t);
    const g = lerp(deepBlue[1], lightGreen[1], t);
    const b = lerp(deepBlue[2], lightGreen[2], t);

    colorAttr.setXYZ(i, r, g, b);
  }

  positions.needsUpdate = true;
  colorAttr.needsUpdate = true;

  renderer.render(scene, camera);
}
animate();

//
// Resize Handling
//
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onResize, { passive: true });

//
// Debug Controls
//
window.TERRAIN = {
  setNoiseScale(v) {
    noiseScale = v;
  },
  setNoiseHeight(v) {
    noiseHeight = v;
  },
  setSpeed(v) {
    timeSpeed = v;
  },
  setOpacity(v) {
    material.opacity = v;
    material.needsUpdate = true;
  },
  regenerateInitial() {
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const n = simplex.noise2D(x * noiseScale, y * noiseScale) * noiseHeight;
      pos.setZ(i, n);
    }
    pos.needsUpdate = true;
  },
};

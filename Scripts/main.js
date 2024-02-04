import * as THREE from 'https://threejs.org/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x606060);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Create edges geometry
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

// Add both the cube and edges to the scene
scene.add(cube);
scene.add(edges);

// Set the initial position of the cube
cube.position.set(0, 0, 0);
edges.position.set(0, 0, 0);

// Set up the camera for a top-down view
camera.position.set(0, 10, 10);
camera.lookAt(0, 0, 0);

// Set up the animation loop
function animate() {
  requestAnimationFrame(animate);

//   // Rotate the cube (optional)
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   edges.rotation.x += 0.01;
//   edges.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Set up the keyboard controls
const keyboardState = {
  w: false,
  a: false,
  s: false,
  d: false,
};

document.addEventListener('keydown', (event) => {
  if (event.key in keyboardState) {
    keyboardState[event.key] = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key in keyboardState) {
    keyboardState[event.key] = false;
  }
});

// Update cube position based on keyboard input
function updateCubePosition() {
  // if moving diagonally, scale movement by 0.7071
  const scale = (keyboardState.w || keyboardState.s) && (keyboardState.a || keyboardState.d) ? 0.7071 : 1;
  if (keyboardState.w) cube.position.z -= 0.1 * scale;
  if (keyboardState.a) cube.position.x -= 0.1 * scale;
  if (keyboardState.s) cube.position.z += 0.1 * scale;
  if (keyboardState.d) cube.position.x += 0.1 * scale;
}

// Start the animation loop with updated cube position
function animateWithControls() {
  requestAnimationFrame(animateWithControls);

  // Update cube position based on keyboard input
  updateCubePosition();

  // Update the position of the edges based on the cube's position
  edges.position.copy(cube.position);

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop with keyboard controls
animateWithControls();

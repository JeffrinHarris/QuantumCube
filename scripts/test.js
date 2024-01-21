// Example Three.js code
// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
var geometry = new THREE.BoxGeometry();

var cubeColor = new THREE.Color(0,0,1);
var material = new THREE.MeshBasicMaterial({color: cubeColor});
var cube = new THREE.Mesh(geometry, material);
var clock = new THREE.Clock();
scene.add(cube);

// Animation function
var animate = function () {
    requestAnimationFrame(animate);

    var delta = clock.getDelta();

    // Rotate the cube
    cube.rotation.x += 1*delta;
    cube.rotation.y += 2*delta;
    cube.rotation.z += 3*delta;
    cubeColor.r = Math.sin(cube.rotation.x);
    cubeColor.g = Math.sin(cube.rotation.y);
    cubeColor.b = Math.sin(cube.rotation.z);
    material.color = cubeColor;
    cube.material = material;

    renderer.render(scene, camera);
};

// Run the animation
animate();
import * as THREE from "three";

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("hero-render").appendChild(renderer.domElement);

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// SCENE
const scene = new THREE.Scene();

// MATERIAL
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const material2 = new THREE.LineBasicMaterial({ color: 0xdddddd });

// POINTS
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

// GEOMETRY
const geometry = new THREE.BufferGeometry().setFromPoints(points);

const geometryCube = new THREE.BoxGeometry(40, 20, 10);
const geometryCube2 = new THREE.BoxGeometry(100, 5, 100);

// ELEMENT
const line = new THREE.Line(geometry, material);
const cube = new THREE.Mesh(geometryCube, material);
const cube2 = new THREE.Mesh(geometryCube2, material2);

// ADD TO SCENE
//scene.add( line );
scene.add(cube);
scene.add(cube2);

cube2.position.y = -20;

/* const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.5 );
scene.add( ambientLight ); */

// lights
const ambient = new THREE.HemisphereLight(0xffffff, 0xbfd4d2, 3);
scene.add(ambient);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
directionalLight.position.set(1, 4, 3).multiplyScalar(3);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.setScalar(2048);
directionalLight.shadow.bias = -1e-4;
directionalLight.shadow.normalBias = 1e-4;
scene.add(directionalLight);

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

///////////////
function onWindowResize() {
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

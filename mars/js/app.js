// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
  75, // view angle
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping
  1000 // far clipping
);
camera.position.z = 12;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// lights
const ambientLight = new THREE.AmbientLight(0x888888);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xfdfcf0, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

const geometry = new THREE.SphereGeometry(5, 50, 50);
const material = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture("images/mars2.jpg"),
  color: 0xaaaaaa,
  specular: 0x333333,
  shininess: 10
});
const mars = new THREE.Mesh(geometry, material);
scene.add(mars);

// render loop
const render = function(actions) {
  renderer.render(scene, camera);
  mars.rotation.y += 0.01;
  requestAnimationFrame(render);
};
render();

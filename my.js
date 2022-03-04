 // logo canvas saya
window.onload = function () {
var canvaslogo = document.getElementById('logo');
  var logox = canvaslogo.getContext("2d");

  logox.save();
  logox.fillStyle = "rgba(237, 128, 39, 1)";
  logox.scale(1.05, 0.6);
  logox.beginPath();
  logox.arc(35, 51, 30, 0, Math.PI*2, false);
  logox.fill();
  logox.closePath();
  logox.restore();

  logox.save();
  logox.fillStyle = "rgba(255, 255, 255, 1)";
  logox.scale(1.05,0.6);
  logox.beginPath();
  logox.arc(42, 47, 17, 0, Math.PI*2, false);
  logox.fill();
  logox.closePath();
  logox.restore(); 

  logox.font = '18pt Ubuntu';  
  logox.strokeStyle = '#746464';
  logox.strokeText('a', 38, 33); 


  // three js saya
   
let container;
let camera;
let renderer;
let scene;
let kandang;

function init() {
  container = document.querySelector(".mycanvas");

  //scene
  scene = new THREE.Scene();

  const fov = 20;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 30);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load("./kandang/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    kandang = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  kandang.rotation.z += 0.002;
  renderer.render(scene, camera);
}

init();

// scroling navbar saya

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);


}};
var scrollpos = window.scrollY;
var nav = document.getElementsByClassName('navbar-fixed');

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > 70) {
        nav[0].classList.add("scrolled");
    }
    else {
        nav[0].classList.remove("scrolled");
    }
});

$('#top').click(function(){ 
    $('html,body').animate({ scrollTop: 0 }, 100);
    return false; 
});

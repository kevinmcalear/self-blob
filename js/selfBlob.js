var canvas = document.querySelector('#self-blob');
var width = window.innerWidth - 100, // canvas.offsetWidth
    height = window.innerHeight - 100; // canvas.offsetHeight
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0xffffff, 0);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.set(120, 0, 250);

var hemiLight = new THREE.HemisphereLight(0xff0000, 0x0C056D, 0.6);
scene.add(hemiLight);

var light = new THREE.DirectionalLight(0x590D82, 0.5);
light.position.set(200, 300, 400); 
scene.add(light);
var light2 = light.clone();
light2.position.set(-200, 300, 400); 
scene.add(light2);

var geometry = new THREE.IcosahedronGeometry(120, 4);

for(var i = 0; i < geometry.vertices.length; i++) {
    var vector = geometry.vertices[i];
    vector._o = vector.clone();  
}

var material = new THREE.MeshPhongMaterial({
    emissive: 0x23f660, 
    emissiveIntensity: 0,
    shininess: 1
});

var shape = new THREE.Mesh(geometry, material);
shape.matrixAutoUpdate = false;
scene.add(shape);

var multipler = { 
    x: 0.006,
    y: 0.006,
    z: 0.006,
}
function updateVertices (a) {
    for(var i = 0; i < geometry.vertices.length; i++) {
        var vector = geometry.vertices[i];
        vector.copy(vector._o);
        var perlin = noise.simplex3(
            (vector.x * multipler.x) + (a * 0.0002),
            (vector.y * multipler.y) + (a * 0.0003),
            (vector.z * multipler.z)
        );
        var ratio = ((perlin*0.4 * (mouse.y+0.1)) + 0.8);
        vector.multiplyScalar(ratio);
    }
    geometry.verticesNeedUpdate = true;
}


var controls = new THREE.TrackballControls( camera );
controls.rotateSpeed = 1.5;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.noZoom = true;
controls.noPan = true;
controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;

function render(a) {
    controls.update();
    requestAnimationFrame(render);
    updateVertices(a);
    renderer.render(scene, camera);
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();  
    renderer.setSize(width, height);
}

var mouse = new THREE.Vector2(0.8, 0.5);
function onMouseMove(e) {
    TweenMax.to(mouse, 0.8, {
        y: (e.clientY / height),
        x : (e.clientX / width),
        ease: Power1.easeOut
    });
}

requestAnimationFrame(render);
window.addEventListener("mousemove", onMouseMove);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});
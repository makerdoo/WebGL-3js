$(function()  {
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );  //PrespectiveCamera(field of view, aspect ratio, near clipping, far clipping)
var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x000000);
renderer.setSize( window.innerWidth, window.innerHeight );

var axis = new THREE.AxisHelper(10);
scene.add(axis);

var grid = new THREE.GridHelper( 50, 5 );
var color =  new THREE.Color( "rgb(255, 0, 0)");
grid.setColors(color, 0x000000);
scene.add(grid);
var planeGeometry = new THREE.PlaneGeomery( 30, 30, 30 );
var planeMaterial = new THREE.MeshLambertMaterial(color, 0x0000ff);
var plane = new THREE.Mesh( planeMaterial, planeGeometry);
scene.add(plane);

var cubeGeometry = new THREE.BoxGeometry( 5, 5, 5 );
var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xdddddd, wireframe: true } );
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

cube.position.x = 2.50;
cube.position.y = 2.50;
cube.position.z = 2.50;

scene.add( cube );

camera.position.x = 50;
camera.position.y = 50;
camera.position.z = 50;
camera.lookAt(scene.position);

$("#webGL-container").append( renderer.domElement );
renderer.render(scene,camera);
/*document.body.appendChild( renderer.domElement );*/

});
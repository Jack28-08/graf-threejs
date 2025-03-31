import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Geometría común para todos los cubos
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Materiales con diferentes colores para cada cubo
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // Verde
const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } ); // Rojo
const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } ); // Azul

// Creación de los cubos
const cube1 = new THREE.Mesh( geometry, material1 );
const cube2 = new THREE.Mesh( geometry, material2 );
const cube3 = new THREE.Mesh( geometry, material3 );

// Añadir los cubos a la escena
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 );

// Posicionar los cubos para que no se tapen entre sí
cube1.position.x = -2;
cube2.position.x = 0;
cube3.position.x = 2;

// Posición de la cámara
camera.position.z = 5;

// Velocidades de rotación para cada cubo
const rotationSpeed1 = 0.01;
const rotationSpeed2 = 0.02;
const rotationSpeed3 = 0.03;

function animate() {
    // Rotaciones de cada cubo con diferentes velocidades
    cube1.rotation.x += rotationSpeed1;
    cube1.rotation.y += rotationSpeed1;

    cube2.rotation.x += rotationSpeed2;
    cube2.rotation.y += rotationSpeed2;

    cube3.rotation.x += rotationSpeed3;
    cube3.rotation.y += rotationSpeed3;

    // Renderizar la escena y la cámara
    renderer.render( scene, camera );

    // Llamar a la animación en el siguiente fotograma
    requestAnimationFrame( animate );
}

animate();

import * as THREE from 'three'

// Сцена
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.z = 5

// Свет
//const ambientLight = new THREE.AmbientLight('white', 0.3)
//scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight('white', 1.0)
dirLight.position.set(5, 5, 5)
scene.add(dirLight)

/*
const pointLight = new THREE.PointLight('white', 10.0, 100)
pointLight.position.set(0.0, 0.0, 0.0)
scene.add(pointLight)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)

const spotLight = new THREE.SpotLight('yellow', 1)
spotLight.position.set(-8, 0, 0)
scene.add(spotLight)
const spoLightHelper = new THREE.SpotLightHelper(spotLight, 0.2)
scene.add(spoLightHelper)
*/

// Рендер
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

/*
const texture = new THREE.TextureLoader().load('img/box.avif')
const textureMaterial = new THREE.MeshBasicMaterial({map: texture})
const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), textureMaterial)
plane.position.set(-2, 2, 0)
scene.add(plane)

const earthTexture = new THREE.TextureLoader().load('img/earthmap1k.jpg')
const earthTextureMaterial = new THREE.MeshBasicMaterial({map: earthTexture})
*/

// Ящик
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color: 'red'})
const box = new THREE.Mesh(geometry, material)
box.position.set(-3, 0, 0)
scene.add(box)

// Сфера
const sphereGeom = new THREE.SphereGeometry(1.5, 10, 10)
const shpereMaterial = new THREE.MeshStandardMaterial({color: 'green'})
const sphere = new THREE.Mesh(sphereGeom, shpereMaterial)
sphere.position.set(2, 0, 0)
scene.add(sphere)


// Функция ренднринга
function animate() {
    requestAnimationFrame(animate)

    box.rotation.x += 0.01
    box.rotation.y += 0.01
    box.rotation.z += 0.001

    //sphere.rotation.x += 0.01
    sphere.rotation.y += 0.01
    //sphere.rotation.z += 0.01

    renderer.render(scene, camera)
}

// Вход в программу
animate()
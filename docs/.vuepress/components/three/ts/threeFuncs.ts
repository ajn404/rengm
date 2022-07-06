
export const initThree = (THREE, container) => {
    const scene = new THREE.Scene()
    //透视摄像机
    const camera = new THREE.PerspectiveCamera(
        75,
        1,
        0.1,
        1000
    )
    camera.position.z = 1.5
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(500,500)
    container.value.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0x9AB772,
        wireframe: true,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect =1
        camera.updateProjectionMatrix()
        renderer.setSize(500, 500)
        render()
    }

    function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.02
        cube.rotation.y += 0.01
        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate()
}


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export const extraModuleUse = (THREE, container) => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    new OrbitControls(camera, renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    })

    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

    function animate() {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate()
}


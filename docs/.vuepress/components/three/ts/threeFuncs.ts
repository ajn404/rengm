
export const initThree = (THREE, container) => {
    const scene = new THREE.Scene()
    //透视摄像机
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 1.5
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    (container.value || document.body).appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0x9AB772,
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
        cube.rotation.x += 0.02
        cube.rotation.y += 0.01
        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate()
}


export const extraModuleUse = (THREE, container, extra) => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight);
    (container.value || document.body).appendChild(renderer.domElement);

    new extra.OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.BoxGeometry();
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


export const css3DSprites = (THREE, container, extra) => {
    const { TWEEN, TrackballControls, CSS3DRenderer, CSS3DSprite } = extra;


    let camera, scene, renderer;
    let controls;

    const particlesTotal = 512;
    const positions:any = [];
    const objects:any = [];
    let current = 0;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.set(600, 400, 1500);
        camera.lookAt(0, 0, 0);

        scene = new THREE.Scene();

        const image = document.createElement('img');
        image.addEventListener('load', function () {

            for (let i = 0; i < particlesTotal; i++) {

                const object:any = new CSS3DSprite(image.cloneNode());
                object.position.x = Math.random() * 4000 - 2000,
                    object.position.y = Math.random() * 4000 - 2000,
                    object.position.z = Math.random() * 4000 - 2000;
                scene.add(object);

                objects.push(object);

            }

            transition();

        });
        image.src = '/images/sprite.png';

        // Plane

        const amountX = 16;
        const amountZ = 32;
        const separationPlane = 150;
        const offsetX = ((amountX - 1) * separationPlane) / 2;
        const offsetZ = ((amountZ - 1) * separationPlane) / 2;

        for (let i = 0; i < particlesTotal; i++) {

            const x = (i % amountX) * separationPlane;
            const z = Math.floor(i / amountX) * separationPlane;
            const y = (Math.sin(x * 0.5) + Math.sin(z * 0.5)) * 200;

            positions.push(x - offsetX, y, z - offsetZ);

        }

        // Cube

        const amount = 8;
        const separationCube = 150;
        const offset = ((amount - 1) * separationCube) / 2;

        for (let i = 0; i < particlesTotal; i++) {

            const x = (i % amount) * separationCube;
            const y = Math.floor((i / amount) % amount) * separationCube;
            const z = Math.floor(i / (amount * amount)) * separationCube;

            positions.push(x - offset, y - offset, z - offset);

        }

        // Random

        for (let i = 0; i < particlesTotal; i++) {

            positions.push(
                Math.random() * 4000 - 2000,
                Math.random() * 4000 - 2000,
                Math.random() * 4000 - 2000
            );

        }

        // Sphere

        const radius = 750;

        for (let i = 0; i < particlesTotal; i++) {

            const phi = Math.acos(- 1 + (2 * i) / particlesTotal);
            const theta = Math.sqrt(particlesTotal * Math.PI) * phi;

            positions.push(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            );

        }

        //

        renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.value.appendChild(renderer.domElement);

        //

        controls = new TrackballControls(camera, renderer.domElement);

        //

        window.addEventListener('resize', onWindowResize);

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function transition() {

        const offset = current * particlesTotal * 3;
        const duration = 2000;

        for (let i = 0, j = offset; i < particlesTotal; i++, j += 3) {

            const object: any = objects[i];

            new TWEEN.Tween(object.position)
                .to({
                    x: positions[j],
                    y: positions[j + 1],
                    z: positions[j + 2]
                }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }

        new TWEEN.Tween(this)
            .to({}, duration * 3)
            .onComplete(transition)
            .start();

        current = (current + 1) % 4;

    }

    function animate() {

        requestAnimationFrame(animate);

        TWEEN.update();
        controls.update();

        const time = performance.now();

        for (let i = 0, l = objects.length; i < l; i++) {

            const object: any = objects[i];
            const scale = Math.sin((Math.floor(object.position.x) + time) * 0.002) * 0.3 + 1;
            object.scale.set(scale, scale, scale);

        }

        renderer.render(scene, camera);

    }


}
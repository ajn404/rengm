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

export const geometry = (THREE, container) => {
    const scene = new THREE.Scene()
    //透视摄像机
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 18
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    (container.value || document.body).appendChild(renderer.domElement);

    const width =8;
    const height =8;
    const depth = 8;

    const geometry = new THREE.BoxGeometry(width,height,depth);
    const material = new THREE.MeshBasicMaterial({
        color: 0x990099,
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

export const geometrySegment = (THREE,container)=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    (container.value||document.body).appendChild(renderer.domElement);

    const width = 8;
    const height = 8;
    const depth = 8 ;
    const widthSegments = 4;
    const heightSegments = 4;
    const depthSegments= 4;

    const geometry = new THREE.BoxGeometry(width,height,depth,widthSegments,heightSegments,depthSegments)
    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
    })
    material.color.setHSL(0,1,.5)

    const cube = new THREE.Mesh(geometry,material);
    scene.add(cube)
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

export const circleGeometry = (THREE,container)=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    (container.value||document.body).appendChild(renderer.domElement);

    const radius = 7;
    const segments = 24;
    const geometry = new THREE.CircleGeometry(radius,segments)
    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
    })
    material.color.setHSL(0,1,.5)

    const cube = new THREE.Mesh(geometry,material);
    scene.add(cube)
    function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.001
        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate()
}

// circleGeometryTheta
export const circleGeometryTheta = (THREE,container)=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    (container.value||document.body).appendChild(renderer.domElement);

    const radius = 7;
    const segments = 24;

    const thetaStart = 0;
    const thetaEnd = Math.PI
    const geometry = new THREE.CircleGeometry(radius,segments,thetaStart,thetaEnd);

    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
    })
    material.color.setHSL(0,1,.5)

    const cube = new THREE.Mesh(geometry,material);
    scene.add(cube)
    function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.001
        render()
    }

    function render() {
        renderer.render(scene, camera)
    }

    animate()
}
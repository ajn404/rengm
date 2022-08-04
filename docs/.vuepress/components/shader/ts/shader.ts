//@ts-ignore
import * as THREE from "three";
//@ts-ignore
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as  TWEEN  from '@tweenjs/tween.js';
//@ts-ignore
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
//@ts-ignore
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js';


class Sketch {
    time: number;
    geometry: any;
    material: any;
    mesh: any;
    scene: any;
    renderer: any;
    camera: any;
    container: any;
    width: any;
    height: any;
    control: any;

    constructor(options:any) {
        // this.init(options)


    }

    init(options:any) {
        this.time = 10;
        this.container = options.container;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.01,
            10
        );
        this.camera.position.z = 1;

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha:true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.control = new OrbitControls(this.camera, this.renderer.domElement);

        this.resize()
        addEventListener("resize", this.resize.bind(this), false)
        this.addObject();
        this.animate();
    }

    animate() {
        //   this.time += 0.05;
        this.mesh.rotation.x += this.time / 1000;
        this.mesh.rotation.y += this.time / 1000;
        this.render();
        requestAnimationFrame(this.animate.bind(this));
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.render();
    }

    addObject() {
        this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        //   this.material = new THREE.MeshBasicMaterial({
        //     // color: 0x00ff00,
        //     // wireframe: true,
        //   });

        this.material = new THREE.MeshNormalMaterial()

        this.material = new THREE.ShaderMaterial(
            {
                fragmentShader: `
                    void main(){
                        gl_FragColor = vec4(1.0,0.,1,1.);
                    }
                `,
                vertexShader: `
                void main(){
                    gl_Position = projectionMatrix * modelViewMatrix * vec4 
                    (position,1.0);
                }`
            }
        )


        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }
}


//@ts-ignore
import fragmentShaderEffectFr from "../glsl/method/fr.glsl";
//@ts-ignore
import fragmentShaderEffectVe from "../glsl/method/ve.glsl";

//@ts-ignore
import ocean from '@/public/images/ocean.jpg';
//@ts-ignore
export const method = container=>{
    const options = {
        container: container.value || document.body,
    };

    let s = new Sketch(options);
    s.addObject = function () {
        this.geometry = new THREE.SphereBufferGeometry(.6,  40, 40);
        // this.geometry = new THREE.PlaneBufferGeometry(1,1,  40, 40);

        this.material = new THREE.ShaderMaterial(
            {
                side: THREE.DoubleSide,
                fragmentShader: fragmentShaderEffectFr,
                vertexShader:fragmentShaderEffectVe,
                wireframe: true,
                uniforms:{
                    time:{
                        value:0
                    },
                    oceanTexture:{
                        value:new THREE.TextureLoader().load(ocean)
                    }
                }
            }
        )
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    };

    s.time=0;
    s.animate = function (){
        this.time+=0.05;
        this.material.uniforms.time.value=this.time

        this.render();
        requestAnimationFrame(this.animate.bind(this));
    }


    s.init(options);
}

import firstVs from '../glsl/first/vs.glsl';

export const first = (container:any)=>{
    const options = {
        container: container.value || document.body,
    };

    let s = new Sketch(options);
    s.addObject = function () {
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.ShaderMaterial(
            {
                // wireframe: true,
                // fragmentShader: fragmentShaderEffectFr,
                vertexShader:firstVs,
            }
        )
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    };

    s.time=0;
    s.animate = function (){
        // this.time+=0.05;

        this.render();
        requestAnimationFrame(this.animate.bind(this));
    }


    s.init(options);
}
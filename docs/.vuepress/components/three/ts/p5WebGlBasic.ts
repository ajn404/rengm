import { ElMessage } from "element-plus";

const isClickCanvas = (_) => {
    let mx = _.mouseX, my = _.mouseY;
    let mw = _.width, mh = _.height;
    return mx > 0 && mx < mw && my > 0 && my < mh
}

export const coordinate = (_p5) => {
    let _ = _p5;
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        _.normalMaterial()

    }
    _.draw = () => {
        _.background(250)

        _.orbitControl()
        _.rotateY(0.003 * _.PI * _.frameCount);
        _.box(100)

        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const defaultFunc = (_p5) => {
    let _ = _p5;
    let slider;
    let p5DrawLoop = window.p5DrawLoop;

    _.setup = () => {
        _.createCanvas(500, 500, _.WEBGL)
        _.fill("red")
        _.normalMaterial()

        slider = _.createSlider(0, 255, 200)
        // slider.position(10,10);
        slider.style("width", "500px")
    }
    _.draw = () => {

        _.orbitControl();

        _.background(255)
        let val = slider.value();
        _.rotateZ(_.frameCount * 0.002)
        _.rotateX(_.frameCount * 0.002)
        _.rotateY(_.frameCount * 0.002)
        _.box(val)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }

    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.loop()
            }
        }
    }
}

export const renderSteps = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        _.normalMaterial()

    }

    let teaBox
    _.preload = () => {
        teaBox = _.loadModel('/rengm/model/teapot.obj', true)
    }

    _.draw = () => {
        _.background(250)


        _.orbitControl()
        _.rotateZ(_.PI)

        _.rotateX(_.frameCount * _.PI * 0.01)
        _.model(teaBox)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.redraw()
            _.noLoop()
        }
    }

    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.loop()
            }
        }
    }
}

export const pointHandle = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
    }

    _.draw = () => {
        _.background(255)


        _.camera(0, 0, 160 + _.sin(_.frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0)
        _.rotateX(_.PI / 3)
        _.torus(30, 10)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const textureDemo = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
    }

    let img, angle;
    _.preload = () => {
        img = _.loadImage('/rengm/images/logo.png')
    }

    _.draw = () => {
        _.background(255)
        angle = _.PI * _.frameCount * 0.001
        _.rotateX(angle)
        _.rotateY(angle)
        _.rotateZ(angle)

        _.texture(img)
        _.box(100)



        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const ambientLight = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    let angle;
    let lightColor, materialColor;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        lightColor = _.createColorPicker('#ffffff')
        materialColor = _.createColorPicker('#ff00ff')
        lightColor.style('margin-top', '1em')
        materialColor.style('margin-top', '1em')
    }


    _.draw = () => {
        _.background(255)
        angle = _.PI * _.frameCount * 0.001
        _.rotateX(angle)
        _.rotateY(angle)
        _.rotateZ(angle)
        _.ambientLight(lightColor.color())
        _.ambientMaterial(materialColor.color());
        _.cone(30, 70)
        _.translate(0, 0, -100)
        _.box(50)


        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const directionalLight = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(200, 200, _.WEBGL)
    }

    let dirX, dirY;
    _.draw = () => {
        _.background(0)

        dirX = (_.mouseX / _.width - 0.5) * 2;
        dirY = (_.mouseY / _.height - 0.5) * 2

        _.directionalLight(255, 255, 255, -dirX, -dirY, -1)
        _.noStroke()
        _.sphere(80)



        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const pointLight = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(200, 200, _.WEBGL)
    }


    _.draw = () => {
        _.background(0)
        let locX = _.mouseX - _.width / 2;
        let locY = _.mouseY - _.height / 2;
        _.pointLight(250, 250, 250, locX, locY, 100);
        _.noStroke();
        _.sphere(80);
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const spotLight = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    let colorPicker;
    _.setup = () => {
        _.createCanvas(200, 200, _.WEBGL)
        _.noStroke()
        colorPicker = _.createColorPicker('#00ff00')
    }

    let locX,locY;
    _.draw = () => {
        _.background(0)

        locX = _.mouseX - _.width/2;
        locY = _.mouseY - _.height/2

        _.ambientLight(50)
        _.spotLight(colorPicker.color(), locX, locY, 200, 0, 0, -1, Math.PI / 16);
        _.sphere(80)

        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}

export const demo = (_) => {
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(200, 200, _.WEBGL)
    }

    _.draw = () => {
        _.background(255)

        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }
    }
    _.mousePressed = () => {
        if (isClickCanvas(_)) {
            window.p5DrawLoop = p5DrawLoop
            if (!(_.isLooping())) {
                _.redraw()
                _.loop()
            }
        }
    }
}
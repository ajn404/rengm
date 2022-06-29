export const coordinate = (_p5) => {
    let _ = _p5;
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        _.normalMaterial()

    }
    _.draw = () => {
        _.background(250)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
            window.addEventListener("scroll",()=>{
                if(!(_.isLooping())&&window.p5DrawLoop === p5DrawLoop){
                    _.loop()
                }
            })
        }   
        _.orbitControl()
        _.rotateY(0.5);
        _.box(100)
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
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
            window.addEventListener("scroll",()=>{
                console.log(window.p5DrawLoop)
                if(!(_.isLooping())&&window.p5DrawLoop === p5DrawLoop){
                    _.loop()
                }
            })
        }
        _.orbitControl();

        _.background(255)
        let val = slider.value();
        _.rotateZ(_.frameCount * 0.002)
        _.rotateX(_.frameCount * 0.002)
        _.rotateY(_.frameCount * 0.002)
        _.box(val)
    }
}

export const renderSteps = (_)=>{
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        _.normalMaterial()

    }

    let teaBox 
    _.preload = ()=>{
        teaBox = _.loadModel('/rengm/model/teapot.obj',true)
    }

    _.draw = () => {
        _.background(250)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
        }   
        _.orbitControl()
        _.rotateZ(_.PI)

        _.rotateX(_.frameCount*_.PI*0.01)
        _.model(teaBox)
    }
}

export const pointHandle = (_)=>{
    let p5DrawLoop = window.p5DrawLoop;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
    }

    _.draw = () => {
        _.background(250)
        if (window && window.p5DrawLoop !== p5DrawLoop) {
            _.noLoop()
            window.addEventListener("scroll",()=>{
                if(!(_.isLooping())&&window.p5DrawLoop === p5DrawLoop){
                    _.loop()
                }
            })
        }   

        _.camera(0,0,160+_.sin(_.frameCount*0.01)*100,0,0,0,0,1,0)
        _.rotateX(_.PI/3)
        _.torus(30,10)
    }
}
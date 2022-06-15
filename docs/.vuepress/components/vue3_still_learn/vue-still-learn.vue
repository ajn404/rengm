<template>
    <div class="vue-still-learn" ref="box">

    </div>
</template>

<script>
    //vue中使用P5的方式
    import P5 from "../../resource/p5";

    export default {
        name: "vue-still-learn",
        data(){
          return {
          }
        },
        mounted() {
            this.$nextTick(()=>{
                let judgeCanvasExist = document.getElementById("defaultCanvas0")
                if(judgeCanvasExist===null) {
                    new P5(this.main);
                }
            })
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                let bubbles = [];
                const window_width = window.innerWidth;
                const window_height = window.innerHeight;
                p5.setup = () => {
                    p5.createCanvas(window_width / 4, window_height / 4);
                    for (let i = 0; i < 100; i++) {
                        let x = p5.random(p5.width);
                        let y = p5.random(p5.height);
                        let r = p5.random(20, 60);
                        let b = new Bubble(x, y, r);
                        bubbles.push(b);
                    };
                    let myCanvas=document.getElementById("defaultCanvas0");
                    let container = this.$refs.box;
                    container.appendChild(myCanvas)
                    // let dataUrl = myCanvas.toDataURL();
                    //base64
                    // this.canvasUrl = dataUrl;
                    // console.log(typeof myCanvas)
                    // console.log(myCanvas.parentNode)
                    // debugger
                    // myCanvas.parentNode.removeNode(myCanvas)
                }
                p5.mouseMoved = () => {
                    for (let i = bubbles.length - 1; i >= 0; i--) {
                        if (bubbles[i].contains(p5.mouseX, p5.mouseY)) {
                            bubbles.splice(i, 1);
                        }
                    }
                }
                p5.draw = () => {
                    p5.background(0);
                    for (let i = 0; i < bubbles.length; i++) {
                        if (bubbles[i].contains(p5.mouseX, p5.mouseY)) {
                            bubbles[i].changeColor(255);
                        } else {
                            bubbles[i].changeColor(0);
                        }
                        bubbles[i].move();
                        bubbles[i].show();
                    }
                }

                class Bubble {
                    constructor(x, y, r) {
                        this.x = x;
                        this.y = y;
                        this.r = r;
                        this.brightness = 0;
                    }

                    changeColor(bright) {
                        this.brightness = bright;
                    }

                    contains(px, py) {
                        let d = p5.dist(px, py, this.x, this.y);
                        if (d < this.r) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                    move() {
                        this.x = this.x + p5.random(-2, 2);
                        this.y = this.y + p5.random(-2, 2);
                    }

                    show() {
                        p5.stroke(255);
                        p5.strokeWeight(4);
                        p5.fill(this.brightness, 125);
                        p5.ellipse(this.x, this.y, this.r * 2);
                    }
                }

            }
        }
    }
</script>

<style scoped>
    .vue-still-learn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

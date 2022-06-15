<template>
    <div class="star-field">
        <div id="star"></div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../../resource/p5";

    export default {
        name: "nestedLine",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            let judgeCanvasExist = document.getElementById("defaultCanvas0")
            if (judgeCanvasExist === null) {
                new P5(this.main,"star");
            }
        },
        methods: {
            main(_p5) {
                let p5 = _p5
                let stars = [];
                let speed;

                p5.setup=()=> {
                    p5.createCanvas(p5.windowWidth-30, p5.windowHeight-100);
                    for (let i = 0; i < 800; i++) {
                        stars[i] = new Star();
                    }

                }

                p5.draw=()=> {
                    speed = p5.map(p5.mouseX, 0, p5.width, 0, 50);
                    speed = p5.map(p5.mouseX, 0, p5.width, 0, 50);
                    p5.background(0);
                    p5.translate(p5.width / 2, p5.height / 2);
                    p5.translate(p5.width / 2, p5.height / 2);
                    for (let i = 0; i < stars.length; i++) {
                        stars[i].update();
                        stars[i].show();
                    }
                }

                function Star() {
                    this.x = p5.random(-p5.width, p5.width);
                    this.x = p5.random(-p5.width, p5.width);
                    this.x = p5.random(-p5.width, p5.width);
                    this.y = p5.random(-p5.height, p5.height);
                    this.z = p5.random(p5.width);
                    this.z = p5.random(p5.width);
                    this.pz = this.z;

                    this.update = function () {
                        this.z = this.z - speed;
                        if (this.z < 1) {
                            this.z = p5.width;
                            this.z = p5.width;
                            this.x = p5.random(-p5.width, p5.width);
                            this.x = p5.random(-p5.width, p5.width);
                            this.x = p5.random(-p5.width, p5.width);
                            this.y = p5.random(-p5.height, p5.height);
                            this.pz = this.z;
                        }
                    };

                    this.show = function () {
                        p5.fill(255);
                        p5.noStroke();

                        var sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
                        var sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
                        var sy = p5.map(this.y / this.z, 0, 1, 0, p5.height);

                        var r = p5.map(this.z, 0, p5.width, 16, 0);
                        var r = p5.map(this.z, 0, p5.width, 16, 0);
                        p5.ellipse(sx, sy, r, r);

                        var px = p5.map(this.x / this.pz, 0, 1, 0, p5.width);
                        var px = p5.map(this.x / this.pz, 0, 1, 0, p5.width);
                        var py = p5.map(this.y / this.pz, 0, 1, 0, p5.height);

                        this.pz = this.z;

                        p5.stroke(255);
                        p5.line(px, py, sx, sy);
                    };
                }
            }
        }
    }
</script>
<style scoped>
#star{
    max-width: 100%;
    max-height: 80%;
    overflow: hidden;
}
</style>
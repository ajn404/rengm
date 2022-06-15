<template>
    <div class="star-field">
        <div id="star">
        </div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";
    export default {
        name: "nestedLine",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
    document.getElementById('star').innerHTML = ''
                new P5(this.main,"star");
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                let angle = 0;
                p5.setup=()=> {
                    p5.createCanvas(p5.windowWidth-30, p5.windowHeight-100);
                    p5.angleMode(p5.RADIANS)
                }
                p5.draw=()=> {
                    p5.background(146,83,161);
                    p5.noStroke();
                    p5.fill(240,99,164);
                    p5.rectMode(p5.CENTER);
                    p5.translate(200,200);
                    p5.rotate(angle);
                    p5.rect(0,0,256,32);
                    angle+=0.05;
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
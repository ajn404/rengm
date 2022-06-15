<template>
    <div class="box">
        <div id="draw">

        </div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";

    export default {
        data() {
            return {}
        },
        created() {

        },
        mounted() {
    document.getElementById('draw').innerHTML = ''

                new P5(this.main,"draw");

        },
        methods: {
            main(_p5) {
                let p5 = _p5;

                let yPos= 0
                p5.setup=()=> {
                    p5.createCanvas((p5.windowWidth-30)/4, (p5.windowHeight-100)/2);

                    p5.frameRate(60);

                }

                p5.draw=()=> {
                    p5.background(204);
                    yPos = yPos - 1;
                    if (yPos < 0) {
                        yPos = p5.height;
                    }
                    p5.strokeWeight(4);
                    if(yPos%10<5){
                        p5.stroke(yPos%256,256-yPos%256,p5.random(0,255))
                        p5.line(0, yPos, p5.width, yPos);
                    }

                }
            }
        }

    }
</script>
<style scoped lang="scss">
    #draw{
        max-width: 100%;
        max-height: 80%;
        overflow: hidden;
        canvas{
            margin: 0 auto;
        }
    }
</style>
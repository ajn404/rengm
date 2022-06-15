<template>
    <div class="box">
        <div id="describe">

        </div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";

    export default {
        name:'describe',
        data() {
            return {}
        },
        created() {

        },
        mounted() {
    document.getElementById('describe').innerHTML = ''

                new P5(this.main,"describe");
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                p5.setup=()=> {
                    p5.createCanvas((p5.windowWidth-30)/4, (p5.windowHeight-100)/2);

                }
                p5.draw=()=> {
                    p5.describe('pink square with red heart in the bottom right corner');
                    p5.background('pink');
                    p5.fill('red');
                    p5.noStroke();
                    p5.ellipse(67, 67, 20, 20);
                    p5.ellipse(83, 67, 20, 20);
                    p5.triangle(91, 73, 75, 95, 59, 73);

                    p5.triangle(0,0,10,0,0,10)
                }
            }
        }

    }
</script>
<style scoped>
    #describe{
        max-width: 100%;
        max-height: 80%;
        overflow: hidden;
    }
</style>
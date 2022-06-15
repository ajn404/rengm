<template>
    <div class="box">
        <div id="angular-motion"></div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../.vuepress/resource/p5";
    export default {
        name:'angularMotion',
        data() {
            return {}
        },
        created() {

        },
        mounted() {
    document.getElementById('angular-motion').innerHTML = ''
                new P5( this.main , "angular-motion");
        },
        methods: {
            main( _p5 ) {

                let p5 = _p5 ;
                let angle = 0 ;

                let angleV = 0;
                let angleA = 0.00001;

                let cWidth =  p5.windowWidth/2;
                let cHeight = p5.windowHeight/2;


                p5.setup=()=> {

                    p5.createCanvas(cWidth, cHeight);
                    p5.angleMode(p5.RADIANS);

                }
                p5.draw=()=> {
                    angleA = p5.map(p5.mouseX,0,p5.width,-0.01,0.01)
                    angleV = p5.constrain(angleV,-0.2,0.2)
                    p5.background( 146 , 83 , 161 );
                    p5.noStroke();
                    p5.fill( 240 , 99 , 164 );
                    p5.rectMode( p5.CENTER );
                    p5.translate( cWidth/2 , cHeight/2);
                    p5.rotate( angle );
                    p5.rect( 0 , 0 , 256 , 32 );
                    angle += angleV;
                    angleV+=angleA;

                }
            }
        }

    }
</script>
<style scoped>
    .box{
        min-width: 100%;
        max-width: 100%;
    }
    #angular-motion{
        max-width: 100%;
        max-height: 80%;
        overflow: hidden;
    }
</style>
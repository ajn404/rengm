<template>
  <div class="box">
    <div id="polar-coordinates-demo"></div>
  </div>
</template>
<script>
//vue中使用P5的方式
import P5 from "../../.vuepress/resource/p5";
export default {
  data() {
    return {
      deleteNumber: 0.03,
      rotateSpeed: 1,
      color1:'#abcde1',
      value:0.01,

    };
  },
  setup(){
  },
  created() {},
  mounted() {
    document.getElementById('polar-coordinates-demo').innerHTML = ''
    new P5(this.main, "polar-coordinates-demo");
  },
  // 极坐标
  methods: {
    main(_p5) {
      let p5 = _p5;
      let r = 150;

      let TWO_PI = p5.PI * 2;


      p5.setup = () => {
        p5.createCanvas(400, 400);
      };

      p5.draw = () => {

        // console.log(document.getElementById('polar-coordinates-demo').getBoundingClientRect().top,window.innerHeight)
        let increment = p5.map(p5.mouseX,0,400,p5.PI,0.01)
        p5.translate(200, 200);

        p5.background(0,10);
        p5.stroke(255);
        p5.strokeWeight(4);
        p5.noFill();
        p5.beginShape();

        if(increment<0){
          increment=-increment
        }

        for(let i=0;i<TWO_PI;i+=increment){
          let x=r*p5.cos(i);
          let y=r*p5.sin(i);
          p5.vertex(x,y)
        }

        p5.endShape(p5.CLOSE);



      };
    },
  },
};
</script>
<style scoped lang="scss">
@import "~element-plus/dist/index.css";

#polar-coordinates-demo {
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
}
</style>
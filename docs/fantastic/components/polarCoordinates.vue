<template>
  <div class="box">
    <div id="polar-coordinates"></div>
    <p>半径减小的幅度</p>
    <el-input-number
      v-model="deleteNumber"
      placeholder="请输入减小的幅度"
      width="200"
      :step="0.01"
    ></el-input-number>
    <p>旋转的速度</p>
    <el-input-number
      v-model="rotateSpeed"
      placeholder="请输入旋转的速度"
      width="200"
      :step="0.01"
    ></el-input-number>
    <p>选择颜色</p>
    <el-color-picker v-model="color1" />
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
      color1:'#abcde1'

    };
  },
  watch:{
      deleteNumber(value){
          console.log(typeof value)
      }
  },
  setup(){
  },
  created() {},
  mounted() {
    document.getElementById('polar-coordinates').innerHTML = ''
    new P5(this.main, "polar-coordinates");
  },
  // 极坐标
  methods: {
    main(_p5) {
      let p5 = _p5;
      let angle = p5.PI / 4;
      let r = 150;
      let width = p5.windowWidth - 30;
      let height = p5.windowHeight - 100;
      p5.setup = () => {
        p5.createCanvas(400, 400);
        // p5.frameRate(60);
      };
      p5.draw = () => {
        p5.background(0, 10);
        // p5.stroke(255);
        // p5.strokeWeight(4);
        // p5.noFill();
        // p5.circle(0, 0, r * 2);
        p5.translate(200, 200);
        // 定义点
        p5.strokeWeight(32);
        p5.stroke(this.color1);
        let x = r * p5.cos(angle);
        let y = r * p5.sin(angle);
        p5.point(x, y);
        r -= this.deleteNumber;
        if (r < 32) {
          r = 150;
        }
        angle += (p5.PI / 10) * this.rotateSpeed;
      };
    },
  },
};
</script>
<style scoped lang="scss">
@import "~element-plus/dist/index.css";

#polar-coordinates {
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
}
</style>
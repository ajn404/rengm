<template>
  <div class="box">
    <div id="triangle"></div>
  </div>
</template>
<script>
//vue中使用P5的方式
import P5 from "../../.vuepress/resource/p5";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    document.getElementById('triangle').innerHTML = ''
    new P5(this.main, "triangle");
  },
  // "谢尔宾斯基"(笑)
  methods: {
    main(_p5) {
      let p5 = _p5;
      let i = 0;
      let num = 5;

      let width = p5.windowWidth - 30;
      let height = p5.windowHeight - 100;
      let pointa, pointb, pointc;

      p5.setup = () => {
        p5.createCanvas(width / 2, height / 2);
      };
      p5.draw = () => {
        p5.describe("pink square with red heart in the bottom right corner");
        p5.background("pink");
        // p5.fill('red');
        // p5.noStroke();
        let originPoints = [
          p5.height / 2,
          0,
          0,
          (p5.height * p5.sqrt(3)) / 2,
          p5.height,
          (p5.height * p5.sqrt(3)) / 2,
        ];
        p5.triangle(
          originPoints[0],
          originPoints[1],
          originPoints[2],
          originPoints[3],
          originPoints[4],
          originPoints[5]
        );
        pointb = originPoints;
        pointc = originPoints;
        pointa = originPoints;
        while (originPoints[0] - originPoints[2] > 10) {
          pointa = this.getPoint(
            originPoints[0],
            originPoints[1],
            originPoints[2],
            originPoints[3],
            originPoints[4],
            originPoints[5]
          );
          p5.triangle(
            pointa[0],
            pointa[1],
            pointa[2],
            pointa[3],
            pointa[4],
            pointa[5]
          );
          pointb = this.getPointB(
            originPoints[0],
            originPoints[1],
            originPoints[2],
            originPoints[3],
            originPoints[4],
            originPoints[5]
          );
          p5.triangle(
            pointb[0],
            pointb[1],
            pointb[2],
            pointb[3],
            pointb[4],
            pointb[5]
          );
          pointc = this.getPointC(
            originPoints[0],
            originPoints[1],
            originPoints[2],
            originPoints[3],
            originPoints[4],
            originPoints[5]
          );
          p5.triangle(
            pointc[0],
            pointc[1],
            pointc[2],
            pointc[3],
            pointc[4],
            pointc[5]
          );

          originPoints = this.getPoint(
            originPoints[0],
            originPoints[1],
            originPoints[2],
            originPoints[3],
            originPoints[4],
            originPoints[5]
          );
        }
      };
    },

    getPoint(x1, y1, x2, y2, x3, y3) {
      return [
        x1,
        y1,
        (x1 + x2) / 2,
        (y1 + y2) / 2,
        (x1 + x3) / 2,
        (y1 + y3) / 2,
      ];
    },
    getPointB(x1, y1, x2, y2, x3, y3) {
      return [
        (x1 + x2) / 2,
        (y1 + y2) / 2,
        x2,
        y2,
        (x2 + x3) / 2,
        (y2 + y3) / 2,
      ];
    },
    getPointC(x1, y1, x2, y2, x3, y3) {
      return [
        (x3 + x1) / 2,
        (y3 + y1) / 2,
        (x2 + x3) / 2,
        (y3 + y2) / 2,
        x3,
        y3,
      ];
    },
  },
};
</script>
<style scoped>
#triangle {
  max-width: 100%;
  /* max-height: 80%; */
  overflow: hidden;
}
</style>
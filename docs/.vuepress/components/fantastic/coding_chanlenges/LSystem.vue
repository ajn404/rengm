<template>
  <div class="l-system">
    <h3>注</h3>
    <h4>
      云朵不是球形的，山峦不是锥形的，海岸线不是圆形的，树皮不是光滑的，闪电也不是一条直线。
      <p dir="rtl">
          ——分形几何学之父Benoit Mandelbrot
          </p>
    </h4>
    <h4>'F'=> 'FF+[+F-F-F]-[-F+F+F]'</h4>
    <h4>指数增长，不要生成太多次，网页会崩</h4>
    <h3>逻辑</h3>
    <h4>
      <pre>
        if (current == 'F') {
            p5.line(0, 0, 0, -len);
            p5.translate(0, -len);
        } else if (current == '+') {
            p5.rotate(angle);
        } else if (current == '-') {
            p5.rotate(-angle);
        } else if (current == '[') {
            p5.push();
        } else if (current == ']') {
            p5.pop();
        }
        </pre>
    </h4>
    <div id="box"></div>
  </div>
</template>
<script>
//vue中使用P5的方式
import P5 from "../../../resource/p5";

export default {
  name: "LSystem",
  data() {
    return {};
  },
  created() {},
  mounted() {
    let judgeCanvasExist = document.getElementById("defaultCanvas0");
    if (judgeCanvasExist === null) {
      new P5(this.main, "box");
    }
  },
  methods: {
    main(_p5) {
      let p5 = _p5;
      let angle;
      let axiom = "F";
      let sentence = axiom;
      let len = 200;

      let rules = [];
      rules[0] = {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]",
      };

      function generate() {
        len *= 0.5;
        var nextSentence = "";
        for (var i = 0; i < sentence.length; i++) {
          var current = sentence.charAt(i);
          var found = false;
          for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
              found = true;
              nextSentence += rules[j].b;
              break;
            }
          }
          if (!found) {
            nextSentence += current;
          }
        }
        sentence = nextSentence;
        p5.createP(sentence);
        turtle();
      }

      function turtle() {
        p5.background(0);
        p5.resetMatrix();
        p5.translate(p5.width / 2, p5.height);
        for (var i = 0; i < sentence.length; i++) {
          var current = sentence.charAt(i);
        p5.stroke(parseInt(255*Math.random()), 100+parseInt(155*Math.random()),100+parseInt(155*Math.random()));
          if (current == "F") {
            p5.line(0, 0, 0, -len);
            p5.translate(0, -len);
          } else if (current == "+") {
            p5.rotate(angle);
          } else if (current == "-") {
            p5.rotate(-angle);
          } else if (current == "[") {
            p5.push();
          } else if (current == "]") {
            p5.pop();
          }
        }
      }

      p5.setup = () => {
        p5.createCanvas(600,800);
        angle = p5.radians(25);
        p5.background(51);
        p5.createP(axiom);
        turtle();
        var button = p5.createButton("生成");
        button.mousePressed(generate);
      };
    },
  },

};
</script>
<style scoped lang="scss">
#box {
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column  ;
  
}
</style>

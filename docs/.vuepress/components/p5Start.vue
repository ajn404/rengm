<template>
  <div class="p5-start">
    <div id="box"></div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
//vue中使用P5的方式
import("../resource/p5.js").then(
    ()=>{
      console.log(typeof window.p5);
      new window.p5(main,'box')
    }
)

import  {ref} from 'vue';
import { ElMessage } from 'element-plus'

const num = ref(0)

const main = (_p5) => {
  let p5 = _p5;
  let angle;
  let axiom = "F";
  let sentence = axiom;
  let len = 100;

  let rules = [];

  rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]",
  };

  function generate() {
    if(num.value<4){
      num.value++;
      len *= 0.5;
      let nextSentence = "";
      for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
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
      turtle();
    }else{
      console.log('打灭打灭')
      ElMessage('最多生成'+(num.value+1)+'次哦😯,我怕生多了💻会炸')
    }

  }

  function turtle() {
    p5.background(0);
    p5.resetMatrix();
    p5.translate(200, 400);
    for (let i = 0; i < sentence.length; i++) {
      let current = sentence.charAt(i);
      p5.stroke(parseInt(255 * Math.random()), 100+parseInt(255*Math.random()),100+parseInt(255*Math.random()));
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
    p5.createCanvas(400,400);
    angle = p5.radians(25);
    p5.background(51);
    turtle();
    let button = p5.createButton("click me 持续生成");
    let buttonStyle =button.elt.style;

    buttonStyle.border = 'none'
    buttonStyle.marginTop = '20px'
    buttonStyle.padding = '10px'
    buttonStyle.width = '100%'
    buttonStyle.boxShadow = '1px 1px 0 0 #e0e0e0'
    buttonStyle.background = 'var(--el-color-primary)'
    buttonStyle.color = '#fff'

    button.elt.addEventListener(
        'mouseenter',function (){
          buttonStyle.opacity = '0.6'
        }
    )
    button.elt.addEventListener(
        'mouseleave',function (){
          buttonStyle.opacity = '1'
        }
    )


    button.mousePressed(generate);



  };
}

</script>
<style scoped lang="scss">
#box {
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>

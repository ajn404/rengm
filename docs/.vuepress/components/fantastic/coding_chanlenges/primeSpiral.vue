<template>
  <div>
    <div id="box1" class="box"></div>
    <div id="box2" class="box display-in-big-screen"></div>
    <div id="box3" class="box display-in-big-screen"></div>
  </div>
</template>

<script>
import P5 from "../../../resource/p5";

export default {
  name: "primeSpiral",
  mounted() {
    this.$nextTick(function () {
      let judgeCanvasExist = document.getElementById("defaultCanvas0");
      if (judgeCanvasExist === null) {
        new P5(this.main, "box1");
        new P5(this.mainBox2, "box2");
        new P5(this.mainBox3, "box3");
      }
    })

  },
  methods: {
    main(_p5) {
      let _ = _p5;
      let x, y;
      let px, py;
      let step = 1;
      let stepSize = 50;
      let numSteps = 1;
      let state = 0;
      let turnCounter = 1;
      let totalSteps;

      _.setup = () => {
        _.createCanvas(550, 550);

        const cols = _.width / stepSize;
        const rows = _.height / stepSize;
        totalSteps = cols * rows;

        x = _.width / 2;
        y = _.height / 2;
        px = x;
        py = y;
        _.background(0);
      }

      _.draw = () => {
        _.textSize(stepSize * 0.5);
        _.textAlign(_.CENTER, _.CENTER);
        _.fill(255);
        _.noStroke();
        _.text(step, x, y);
        _.stroke(255);
        _.strokeWeight(0.5);
        _.noFill();
        _.rectMode(_.CENTER);
        _.rect(x, y, stepSize);
        px = x;
        py = y;

        switch (state) {
          case 0:
            x += stepSize;
            break;
          case 1:
            y -= stepSize;
            break;
          case 2:
            x -= stepSize;
            break;
          case 3:
            y += stepSize;
            break;
        }

        if (step % numSteps === 0) {
          state = (state + 1) % 4;
          turnCounter++;
          if (turnCounter % 2 === 0) {
            numSteps++;
          }
        }
        step++;
        if (step > totalSteps) {
          _.noLoop();
        }
      }
    },

    mainBox2(_p5){
      let _ =_p5;
      let x, y;
      let px, py;
      let step = 1;
      let numSteps = 1;
      let state = 0;
      let turnCounter = 1;
      let totalSteps;

      class Spiral {
        constructor(x, y, w, h) {
          this.stepSize = 5;
          this.pos = _.createVector(x, y);
          const cols = w / this.stepSize;
          const rows = h / this.stepSize;
          this.totalSteps = cols * rows;
          this.x = 0;
          this.y = 0;
          this.px = this.x;
          this.py = this.y;
          this.step = 1;
          this.numSteps = 1;
          this.turnCounter = 1;
          this.state = 0;
        }

        update(testFunction) {
          _.push();
          _.translate(this.pos.x, this.pos.y);
          _.noStroke();
          if (testFunction(this.step)) {
            _.fill(255);
            _.circle(this.x, this.y, this.stepSize * 0.75);
          } else {
            _.fill(50);
            _.circle(this.x, this.y, this.stepSize * 0.75);
          }
          _.strokeWeight(1);
          _.stroke(255, 50);
          //line(this.x, this.y, this.px, this.py);
          _.pop();
          this.px = this.x;
          this.py = this.y;

          switch (this.state) {
            case 0:
              this.x += this.stepSize;
              break;
            case 1:
              this.y -= this.stepSize;
              break;
            case 2:
              this.x -= this.stepSize;
              break;
            case 3:
              this.y += this.stepSize;
              break;
          }

          if (this.step % this.numSteps === 0) {
            this.state = (this.state + 1) % 4;
            this.turnCounter++;
            if (this.turnCounter % 2 === 0) {
              this.numSteps++;
            }
          }
          this.step++;

          if (this.step > this.totalSteps) {
            _.noLoop();
          }
        }
      }

      function isRandom(value) {
        return _.random(1) < 1 / _.log(value);
      }

      function isPrime(value) {
        if (value === 1) return false;
        for (let i = 2; i <= _.sqrt(value); i++) {
          if (value % i === 0) {
            return false;
          }
        }
        return true;
      }

      let spiral1, spiral2;
      _.setup=()=> {
        _.createCanvas(1000, 550);
        _.textFont('Courier-Bold');
        _.background(51);
        spiral1 = new Spiral(250, 250, 465, 465);
        spiral2 = new Spiral(750, 250, 465, 465);
        _.rectMode(_.CENTER);
        _.stroke(255);
        _.fill(0);
        _.rect(250, 250, 465, 465);
        _.rect(750, 250, 465, 465);
        _.fill(255);
        _.textSize(32);
        _.textAlign(_.CENTER);
        _.noStroke();
        _.text('prime', 250, 525);
        _.text('random', 750, 525);
      }

      _.draw=()=>{
        for (let i = 0; i < 10; i++) {
          spiral1.update(isPrime);
          spiral2.update(isRandom);
        }
      }
    },

    mainBox3(_p5){
      let _ = _p5;
      let x, y;
      let px, py;
      let step = 1;
      let stepSize = 20;
      let numSteps = 1;
      let state = 0;
      let turnCounter = 1;
      let totalSteps;

      const spots = [];

      function isPrime(value) {
        if (value === 1) return false;
        for (let i = 2; i <= _.sqrt(value); i++) {
          if (value % i === 0) {
            return false;
          }
        }
        return true;
      }

      _.setup= ()=> {
        _.createCanvas(1920, 1080, _.WEBGL);

        const cols = _.width / stepSize;
        const rows = _.height / stepSize;
        totalSteps = cols * rows;

        x = 0;
        y = 0;
        px = x;
        py = y;
        _.background(0);
      }

      class Spot {
        constructor(x, y, step) {
          this.x = x;
          this.y = y;
          this.step = step;
          this.isPrime = isPrime(step);
        }
        show() {
          if (!this.isPrime) {
            _.fill(45, 197, 244);
            _.rectMode(_.CENTER);
            _.push();
            _.translate(this.x, this.y);
            _.rect(0, 0, stepSize * 0.5);
            _.pop();
          } else {
            let r = stepSize * 0.5;
            _.fill(240, 99, 164);
            _.push();
            _.translate(this.x, this.y);
            _.rotate(-_.PI / 4);
            let h = 24 + _.sqrt(this.step);
            _.translate(0, 0, h / 2);
            _.box(r, r, h);
            _.pop();
          }
        }
      }

      _.draw=()=> {
        _.background(0);
        _.noStroke();
        _.translate(0, 0, -_.width / 2);
        _.rotateX(_.PI / 3);
        _.rotateZ(_.frameCount * 0.01);
        _.specularMaterial(255);
        _.lights();

        for (let s of spots) {
          s.show();
        }

        for (let n = 0; n < 2; n++) {
          spots.push(new Spot(x, y, step));

          px = x;
          py = y;

          switch (state) {
            case 0:
              x += stepSize;
              break;
            case 1:
              y -= stepSize;
              break;
            case 2:
              x -= stepSize;
              break;
            case 3:
              y += stepSize;
              break;
          }

          if (step % numSteps === 0) {
            state = (state + 1) % 4;
            turnCounter++;
            if (turnCounter % 2 === 0) {
              numSteps++;
            }
          }
          step++;
        }
      }

    }


  }
}
</script>

<style scoped>
.box {
  max-width: 100%;
  max-height: 80%;
  display: flex;
  margin: 5vh 0;
  place-items: center;
  flex-direction: column;

}
</style>
export const main = (_p5) => {
    const p5 = _p5;
    let xpos1;
    let xpos2;
    let xpos3;
    let xpos4;
    let thin = 8;
    let thick = 36;
    p5.setup = () => {
        p5.createCanvas(400, 400);
        p5.noStroke();
        xpos1 = p5.width / 2;
        xpos2 = p5.width / 2;
        xpos3 = p5.width / 2;
        xpos4 = p5.width / 2;
    }

    p5.draw = () => {
        if(window.p5DrawLoop!=='main'){
            p5.noLoop()
        }
        p5.background(0);
        const width = p5.width
        let mx = p5.mouseX * 0.4 - p5.width / 5.0;
        p5.fill(102);
        p5.rect(xpos2, 0, thick, p5.height / 2);
        p5.fill(204);
        p5.rect(xpos1, 0, thin, p5.height / 2);
        p5.fill(102);
        p5.rect(xpos4, p5.height / 2, thick, p5.height / 2);
        p5.fill(204);
        p5.rect(xpos3, p5.height / 2, thin, p5.height / 2);
        xpos1 += mx / 16;
        xpos2 += mx / 64;
        xpos3 -= mx / 16;
        xpos4 -= mx / 64;
        if (xpos1 < -thin) {
            xpos1 = width;
        }
        if (xpos1 > width) {
            xpos1 = -thin;
        }
        if (xpos2 < -thick) {
            xpos2 = width;
        }
        if (xpos2 > width) {
            xpos2 = -thick;
        }
        if (xpos3 < -thin) {
            xpos3 = width;
        }
        if (xpos3 > width) {
            xpos3 = -thin;
        }
        if (xpos4 < -thick) {
            xpos4 = width;
        }
        if (xpos4 > width) {
            xpos4 = -thick;
        }
    }
}

export const LSystem = (_p5) => {
    let p5 = _p5;
    let angle = p5.radians(20);
    let axiom = "F";
    let sentence = axiom;
    let len = 100;
    let rules: Object[] = [];
    let num = 0
    rules[0] = {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]",
    };
    //"F" p5.line(0, 0, 0, -len); p5.translate(0, -len);
    //"+" p5.rotate(angle);
    //"-" p5.rotate(-angle);
    //"[" p5.push();
    //"]" p5.pop();

    function generate(canGene) {
        if (num < 4 || canGene) {
            num++;
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
        } else {
            console.log("哒咩哒咩");
            if (num === 4) {
                let button = addButton("继续生成");
                button.mousePressed(generate(true));
            }
        }
    }

    function turtle() {
        p5.background(255);
        p5.resetMatrix();
        p5.translate(200, 400);
        for (let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i);
            p5.stroke(
                Math.floor(255 * Math.random()),
                Math.floor(255 * Math.random()),
                Math.floor(255 * Math.random())
            );
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

    function addButton(label) {
        let button = p5.createButton(label);
        let buttonStyle = button.elt.style;

        buttonStyle.border = "none";
        buttonStyle.marginTop = "20px";
        buttonStyle.padding = "10px";
        buttonStyle.width = "100%";
        buttonStyle.boxShadow = "1px 1px 0 0 #e0e0e0";
        buttonStyle.background = "var(--el-color-primary)";
        buttonStyle.color = "#fff";

        button.elt.addEventListener("mouseenter", function () {
            buttonStyle.opacity = "0.6";
        });
        button.elt.addEventListener("mouseleave", function () {
            buttonStyle.opacity = "1";
        });

        return button;
    }

    p5.setup = () => {
        p5.createCanvas(400, 400);
        p5.background('#fff');
        turtle();
        let button = addButton("click me 持续生成");
        button.mousePressed(generate);
    };
}


export const angularMotion = (_p5) => {

    let p5 = _p5;
    let angle = 0;

    let angleV = 0;
    let angleA = 0.00001;



    p5.setup = () => {

        p5.createCanvas(400, 400);
        p5.angleMode(p5.RADIANS);

    }
    p5.draw = () => {
        if(window.p5DrawLoop!=='angularMotion'){
            p5.noLoop()
        }
        let cWidth = p5.width ;
        let cHeight = p5.height ;
        angleA = p5.map(p5.mouseX, 0, p5.width, -0.01, 0.01)
        angleV = p5.constrain(angleV, -0.2, 0.2)
        p5.background(146, 83, 161);
        p5.noStroke();
        p5.fill(240, 99, 164);
        p5.rectMode(p5.CENTER);
        p5.translate(cWidth / 2, cHeight / 2);
        p5.rotate(angle);
        p5.rect(0, 0, 256, 32);
        angle += angleV;
        angleV += angleA;

    }
}


export const slidePuzzle = (_p5) => {
    let p5 = _p5;

    let width = 400;
    let height = 400;

    let source;

    let w, h;
    let cols = 4;
    let rows = 4;

    let board = [];
    let tiles = [];
    let bubbles = [];

    p5.setup = () => {
      p5.createCanvas(width, height);
      source = p5.createGraphics(width, height);
      w = width / cols;
      h = height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let img = p5.createImage(w, h);
          let index = i + j * cols;
          board.push(index);
          let tile = new Tile(index, img);
          tiles[index] = tile;
        }
      }

      tiles.pop();
      board.pop();
      board.push(-1);

      startViz();

      simpleShuffle(board);
    };

    p5.mousePressed = () => {
      let i = p5.floor(p5.mouseX / w);
      let j = p5.floor(p5.mouseY / h);
      move(i, j, board);
    };

    p5.draw = () => {
        if(window.p5DrawLoop!=='slidePuzzle'){
            p5.noLoop()
        }

        p5.background(0);
      drawViz();

      updateTiles();

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let index = i + j * cols;
          let x = i * w;
          let y = j * h;
          let tileIndex = board[index];
          if (tileIndex > -1) {
            let img = tiles[tileIndex].img;
            p5.image(img, x, y, w, h);
          }
        }
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * w;
          let y = j * h;
          p5.strokeWeight(1);
          p5.noFill();
          p5.rect(x, y, w, h);
        }
      }

      if (isSolved()) {
        console.log("SOLVED");
      }
    };

    function simpleShuffle(arr) {
      for (let i = 0; i < 1000; i++) {
        randomMove(arr);
      }
    }

    function updateTiles() {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = j * w;
          let y = i * h;
          let index = i + j * cols;
          if (tiles[index])
            tiles[index].img.copy(source, x, y, w, h, 0, 0, w, h);
        }
      }
    }

    function randomMove(arr) {
      let r1 = p5.floor(p5.random(cols));
      let r2 = p5.floor(p5.random(rows));
      move(r1, r2, arr);
    }

    function swap(i, j, arr) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    function isSolved() {
      for (let i = 0; i < board.length - 1; i++) {
        if (board[i] !== tiles[i].index) {
          return false;
        }
      }
      return true;
    }

    function move(i, j, arr) {
      let blank = findBlank();
      let blankCol = blank % cols;
      let blankRow = p5.floor(blank / rows);

      if (isNeighbor(i, j, blankCol, blankRow)) {
        swap(blank, i + j * cols, arr);
      }
    }

    function isNeighbor(i, j, x, y) {
      if (i !== x && j !== y) {
        return false;
      }

      if (p5.abs(i - x) == 1 || p5.abs(j - y) == 1) {
        return true;
      }
      return false;
    }

    function findBlank() {
      for (let i = 0; i < board.length; i++) {
        if (board[i] == -1) return i;
      }
    }

    function startViz() {
      for (let i = 0; i < 3; i++) {
        bubbles.push(new Bubble());
      }
    }

    function drawViz() {
      source.background(50);

      for (let b of bubbles) {
        b.update();
        b.show();
      }
    }

    class Bubble {
      constructor() {
        this.r = p5.random(60, 80);
        this.x = p5.random(this.r, width - this.r);
        this.y = p5.random(this.r, height - this.r);
        this.vx = p5.random(-2, 2);
        this.vy = p5.random(-2, 2);
        this.color = p5.color(
          p5.random(255),
          p5.random(255),
          p5.random(255),
          100
        );
      }

      show() {
        source.noFill();
        source.stroke(255);
        source.fill(this.color);
        source.strokeWeight(2);
        source.circle(this.x, this.y, this.r * 2);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > width - this.r || this.x < this.r) {
          this.vx *= -1;
        }
        if (this.y > height - this.r || this.y < this.r) {
          this.vy *= -1;
        }
      }
    }

    class Tile {
      constructor(i, img) {
        this.index = i;
        this.img = img;
      }
    }
  }

export const  polarCoordinates = (_p5) => {
    let p5 = _p5;
    let r = 150;

    let TWO_PI = p5.PI * 2;


    p5.setup = () => {
        p5.createCanvas(400, 400);
    };

    p5.draw = () => {

        if(window.p5DrawLoop!=='polarCoordinates'){
            p5.noLoop()
        }

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
}

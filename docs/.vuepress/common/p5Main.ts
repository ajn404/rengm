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
        if (window && window.p5DrawLoop !== 'main') {
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
        if (window && window.p5DrawLoop !== 'angularMotion') {
            p5.noLoop()
        }
        let cWidth = p5.width;
        let cHeight = p5.height;
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
        if (window && window.p5DrawLoop !== 'slidePuzzle') {
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
        let blank  = findBlank()||0;
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

export const polarCoordinates = (_p5) => {
    let p5 = _p5;
    let r = 150;

    let TWO_PI = p5.PI * 2;


    p5.setup = () => {
        p5.createCanvas(400, 400);
    };

    p5.draw = () => {

        if (window && window.p5DrawLoop !== 'polarCoordinates') {
            p5.noLoop()
        }

        let increment = p5.map(p5.mouseX, 0, 400, p5.PI, 0.01)
        p5.translate(200, 200);

        p5.background(0, 10);
        p5.stroke(255);
        p5.strokeWeight(4);
        p5.noFill();
        p5.beginShape();

        if (increment < 0) {
            increment = -increment
        }

        for (let i = 0; i < TWO_PI; i += increment) {
            let x = r * p5.cos(i);
            let y = r * p5.sin(i);
            p5.vertex(x, y)
        }

        p5.endShape(p5.CLOSE);


    };
}

export const geometries = (_p5) => {
    let _ = _p5;
    _.setup = () => {
        _.createCanvas(710, 400, _.WEBGL)
    }

    _.draw = () => {
        if (window && window.p5DrawLoop !== "geometries") {
            _.noLoop()
        }
        _.background(255);
        _.translate(-200, -100, 0);
        _.normalMaterial()

        _.push()

        _.rotateZ(_.frameCount * 0.01)
        _.rotateX(_.frameCount * 0.01)
        _.rotateY(_.frameCount * 0.01)

        _.plane(70)
        _.pop()

        _.translate(200, 0, 0)
        _.push()
        _.rotateZ(_.frameCount * 0.01)
        _.rotateX(_.frameCount * 0.01)
        _.rotateY(_.frameCount * 0.01)

        _.box(70, 70, 70)
        _.pop()

        _.translate(200, 0, 0);
        _.push();
        _.rotateZ(_.frameCount * 0.01);
        _.rotateX(_.frameCount * 0.01);
        _.rotateY(_.frameCount * 0.01);
        _.cylinder(30, 10);
        _.pop();

        _.translate(-400, 200, 0);
        _.push();
        _.rotateZ(_.frameCount * 0.01);
        _.rotateX(_.frameCount * 0.01);
        _.rotateY(_.frameCount * 0.01);
        //底r和高
        _.cone(30, 100);
        _.pop();

        _.translate(200, 0, 0);
        _.push();
        _.rotateZ(_.frameCount * 0.02);
        _.rotateX(_.frameCount * 0.01);
        _.rotateY(_.frameCount * 0.01);
        //圆环 半径和高
        _.torus(60, 30);
        _.pop();

        _.translate(200, 0, 0);
        _.push();
        _.rotateZ(_.frameCount * 0.01);
        _.rotateX(_.frameCount * 0.01);
        _.rotateY(_.frameCount * 0.01);
        _.sphere(70);
        _.pop();
    }
}

export const sinCos3D = (_p5) => {
    let _ = _p5;
    _.setup = () => {
        _.createCanvas(710, 400, _.WEBGL)
    }

    // let teapot ;
    // _.preload=()=>{
    //         teapot = _.loadModel('/model/teapot.obj', true);
    // }

    _.draw = () => {
        if (window && window.p5DrawLoop !== "sinCos3D") {
            _.noLoop()
        }

        _.background(255);
        _.rotateY(_.frameCount * 0.01)

        for (let j = 0; j < 5; j++) {
            _.push();
            for (let i = 0; i < 100; i++) {
                _.translate(
                    _.sin(_.frameCount * 0.001 + j) * 100,
                    _.sin(_.frameCount * 0.001 + j) * 100,
                    i * 0.1
                )
                _.rotateZ(_.frameCount * 0.002)


                _.push()
                _.sphere(8, 6, 4)
                // _.model(teapot)
                _.pop()
            }

            _.pop()

        }


    }
}

export const boxRef = (_p5) => {

    let _ = _p5;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
        _.normalMaterial()
    }

    let rotateNumber = 0;

    _.draw = () => {
        if (window && window.p5DrawLoop !== "boxRef") {
            _.noLoop()
        }
        _.background(200);
        _.orbitControl();

        _.push()
        _.translate(-20, -20)
        rotateNumber += 0.1
        _.rotateY(rotateNumber)
        _.box(30, 50);
        _.pop()
        _.translate(30, 60)
        _.push()
        _.rotateX(rotateNumber)
        _.box(30, 50)
        _.pop()
    }
}

export const boxRef1 = (_p5) => {
    let _ = _p5;
    _.setup = () => {
        _.createCanvas(500, 200, _.WEBGL)
    }
    _.draw = () => {
        if (window && window.p5DrawLoop !== "boxRef1") {
            _.noLoop()
        }
        _.push()
        _.background(250, 0, 22);
        // _.rotateY(_.frameCount*0.0002)
        _.rotateZ(_.frameCount * 0.01)
        _.rotateY(_.frameCount * 0.01)
        _.rotateX(_.frameCount * 0.01)
        _.box(100)


        _.pop()


        // _.translate(120,0,0)
        // _.box(100)


    }
}

export const defaultFunc = (_p5) => {
    let _ = _p5;
    let slider;
    _.setup = () => {
        _.createCanvas(500, 500, _.WEBGL)
        _.fill("red")
        _.normalMaterial()

        slider = _.createSlider(0, 255, 200)
        // slider.position(10,10);
        slider.style("width", "500px")
    }
    _.draw = () => {
        if (window && window.p5DrawLoop !== "defaultFunc") {
            _.noLoop()
        }
        _.orbitControl();

        _.background(255)
        let val = slider.value();
        _.rotateZ(_.frameCount * 0.002)
        _.rotateX(_.frameCount * 0.002)
        _.rotateY(_.frameCount * 0.002)
        _.box(val)
    }
}


//https://www.youtube.com/watch?v=jxGS3fKPKJA
//有丝分裂
const Cell = function (_, pos, r, c) {

    this.r = r || 20;

    if (pos) {
        this.pos = pos.copy()
    } else
        this.pos = _.createVector(_.random(this.r, _.width), _.random(this.r, _.height))
    this.c = c || _.color(_.random(100, 255), _.random(100, 255), _.random(100, 255), 255)
    this.mitosis = () => new Cell(_, this.pos, this.r * 0.8, this.c)
    this.click = (x, y) => {
        let d = _.dist(this.pos.x, this.pos.y, x, y);
        return d < this.r
    }
    this.move = () => {
        let vel = p5.Vector.random2D();
        this.pos.add(vel)
    }
    this.show = () => {
        _.ellipse(this.pos.x, this.pos.y, this.r, this.r)
        _.noStroke()
        _.fill(this.c)
    }
}

import { ElMessage } from "element-plus";
export const mitosis = (_) => {

    const cells: any = [];
    // let timer;
    _.setup = () => {
        _.createCanvas(500, 200)
        for (let i = 0; i < 20; i++) {
            cells.push(new Cell(_))
        }

        
    }
    _.draw = () => {
        if (window && window.p5DrawLoop !== "mitosis") {
            _.noLoop()
            // clearTimeout(timer)
            // timer = null
        }
        _.background(5)
        _.textSize(16)
        _.text('双击细胞', 200, 100);
        _.fill(0, 102, 153);
        cells.forEach(cell => {
            cell.show();
            cell.move();
        })

    }
    _.doubleClicked = () => {
        if(cells.length<1000)
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].click(_.mouseX, _.mouseY)) {
                cells.push(cells[i].mitosis())
                cells.push(cells[i].mitosis())
                cells.splice(i, 1)
            }
        }else{
            ElMessage.warning("细胞数量超出上限1000")
        }
    }


}



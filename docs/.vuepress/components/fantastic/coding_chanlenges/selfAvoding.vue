<template>
    <div class="self-avoding">
        <div id="self"></div>
    </div>
</template>
<script>
    //vue中使用P5的方式
    import P5 from "../../../resource/p5";

    export default {
        name: "selfAvoding",
        data() {
            return {
                x:null
            }
        },
        created() {

        },
        mounted() {
            this.$nextTick(()=>{

                    this.x=new P5(this.main,"self");
            })

        },
        beforeUnmount() {
          this.x=null;
          console.log(this)
        },
        methods: {
            main(_p5) {
                let p5 = _p5;
                let grid;
                let spacing = 20;
                let cols, rows,depth;
                let path = [];
                let spot;
                class Step {
                    constructor(dx, dy, dz) {
                        this.dx = dx;
                        this.dy = dy;
                        this.dz = dz;
                        this.tried = false;
                    }
                }
                function allOptions() {
                    return [
                        new Step(1, 0, 0),
                        new Step(-1, 0, 0),
                        new Step(0, 1, 0),
                        new Step(0, -1, 0),
                        new Step(0, 0, 1),
                        new Step(0, 0, -1)
                    ];
                }
                class Spot {
                    constructor(i, j, k) {
                        this.i = i;
                        this.j = j;
                        this.k = k;
                        this.x = i * spacing; // + 0.1*p5.random(-spacing,spacing);
                        this.y = j * spacing; // + 0.1*p5.random(-spacing,spacing);;
                        this.z = k * spacing; // + 0.1*p5.random(-spacing,spacing);;
                        this.options = allOptions();
                        this.visited = false;
                    }

                    clear() {
                        this.visited = false;
                        this.options = allOptions();
                    }

                    nextSpot() {
                        let validOptions = [];
                        for (let option of this.options) {
                            let newX = this.i + option.dx;
                            let newY = this.j + option.dy;
                            let newZ = this.k + option.dz;
                            if (isValid(newX, newY, newZ) && !option.tried) {
                                validOptions.push(option);
                            }
                        }

                        if (validOptions.length > 0) {
                            let step = p5.random(validOptions);
                            step.tried = true;
                            return grid[this.i + step.dx][this.j + step.dy][this.k + step.dz];
                        }
                        return undefined;
                    }
                }
                function make3DArray(cols, rows, depth) {
                    let arr = new Array(cols);
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = new Array(rows);
                        for (let j = 0; j < arr[i].length; j++) {
                            arr[i][j] = new Array(depth);
                        }
                    }
                    return arr;
                }
                p5.setup=()=> {
                    p5.createCanvas(500, p5.windowHeight, p5.WEBGL);
                    cols = p5.floor(p5.width / spacing);
                    rows = p5.floor(p5.height / spacing);
                    depth = cols;
                    p5.background(51);
                    grid = make3DArray(cols, rows, depth);
                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            for (let k = 0; k < depth; k++) {
                                grid[i][j][k] = new Spot(i, j, k);
                            }
                        }
                    }
                    const cx = p5.floor(cols / 2);
                    try{
                        spot = grid[cx][cx][cx];
                    }catch (e) {
                        console.log(e)
                    }

                    path.push(spot);
                    spot.visited = true;
                    // frameRate(1);
                }

                function isValid(i, j, k) {
                    if (i < 0 || i >= cols || j < 0 || j >= rows || k < 0 || k >= depth) {
                        return false;
                    }
                    return !grid[i][j][k].visited;
                }

                let lerpX = 0;
                let lerpY = 0;
                let lerpZ = 0;

                 p5.draw=()=> {
                    p5.background(0);

                    let center = p5.createVector(0, 0, 0);
                    let minXYZ = p5.createVector(Infinity, Infinity, Infinity);
                    let maxXYZ = p5.createVector(0, 0, 0);
                    for (let v of path) {
                        minXYZ.x = p5.min(v.x, minXYZ.x);
                        minXYZ.y = p5.min(v.y, minXYZ.y);
                        minXYZ.z = p5.min(v.z, minXYZ.z);
                        maxXYZ.x = p5.max(v.x, maxXYZ.x);
                        maxXYZ.y = p5.max(v.y, maxXYZ.y);
                        maxXYZ.z = p5.max(v.z, maxXYZ.z);
                    }

                    center.x = (maxXYZ.x - minXYZ.x) * 0.5 + minXYZ.x;
                    center.y = (maxXYZ.y - minXYZ.y) * 0.5 + minXYZ.y;
                    center.z = (maxXYZ.z - minXYZ.z) * 0.5 + minXYZ.z;

                    const amt = 0.05;
                    lerpX = p5.lerp(lerpX, center.x, amt);
                    lerpY = p5.lerp(lerpY, center.y, amt);
                    lerpZ = p5.lerp(lerpZ, center.z, amt);
                    //orbitControl();
                    // translate(-spacing * cols * 0.5, -spacing * rows * 0.5, -spacing * depth * 0.5);
                     p5.rotateY(p5.frameCount * 0.002);
                     p5.translate(-lerpX, -lerpY, -lerpZ);
                    // for (let i = 0; i < 500000; i++) {
                    spot = spot.nextSpot();
                    if (!spot) {
                        let stuck = path.pop();
                        stuck.clear();
                        spot = path[path.length - 1];
                    } else {
                        path.push(spot);
                        spot.visited = true;
                    }

                    if (path.length === cols * rows * depth) {
                        console.log('Solved!');
                        noLoop();
                    }
                    //}
                     p5.stroke(255);
                     p5.strokeWeight(spacing * 0.1);
                     p5.noFill();
                     p5.colorMode(p5.HSB);
                    for (let i = 0; i < path.length - 1; i++) {
                        let v1 = path[i];
                        let v2 = path[i + 1];
                        p5.stroke((i + p5.frameCount) % 360, 100, 100);

                        p5.line(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
                    }
                     p5.stroke(255);
                     p5.strokeWeight(spacing * 0.5);
                     p5.point(spot.x, spot.y, spot.z);
                }
            }
        }
    }
</script>
<style scoped>
    #self{
        position: absolute;
        left: 0 ;
        width: 100vw;
        overflow-x: hidden;

    }
</style>

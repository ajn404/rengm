<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "luoXuan",
  mounted() {
    let that = this;
    this.$nextTick(function () {
        that.init()
    });
  },
  methods: {
    init() {
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      let cw = (canvas.width = 300),
        cx = cw / 2;
      let ch = (canvas.height = 300),
        cy = ch / 2;
      ctx.fillStyle = "#6ab150";
      let frames = 0;
      let rad = Math.PI / 180;
      let deg = 180 / Math.PI;
      let R = 100;
      let phi = 0;
      let sp = 6;

      function Draw() {
        requestId = window.requestAnimationFrame(Draw);
        frames += 0.25;
        phi += 0.05;
        ctx.clearRect(0, 0, cw, ch);

        for (let t = -1.3 * sp * Math.PI; t < 1.3 * sp * Math.PI; t += 0.05) {
          let r =
            15 * Math.abs(Math.sin(2 * Math.atan(Math.pow(Math.E, -t / sp))));
          let z =
            R *
            Math.cos(2 * Math.atan(Math.pow(Math.E, -t / sp))) *
            Math.sin(frames * rad);
          let x =
            R *
            Math.cos(t + phi) *
            Math.sin(2 * Math.atan(Math.pow(Math.E, -t / sp)));
          let y =
            R *
            Math.sin(t + phi) *
            Math.sin(2 * Math.atan(Math.pow(Math.E, -t / sp))) *
            Math.cos(frames * rad);
          ctx.fillStyle =
            "hsl(" + t * deg + ", 90%," + (20 + Math.abs(t) * 3) + "%)";
          ctx.beginPath();
          ctx.arc(cx + x, cy + y + z, r, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      let requestId = window.requestAnimationFrame(Draw);
      console.log(requestId)
    },
  },
};
</script>

<style>
#canvas{
        display: block;
            background-color: #000;

            transform: translate(75%);


}
</style>
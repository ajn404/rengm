<template>
  <div class="cubic_bizier">
    <span>
      {{ data }}
    </span>

    <canvas width="340" height="220" ref="canvas_custom"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = ref();

    return {
      data,
    };
  },
  mounted() {
    let canvas = this.$refs.canvas_custom;
    let context = canvas.getContext("2d", { colorSpace: "display-p3" });
    let position = 0;
    // 所谓对称
    for (let green of [255, 0]) {
      for (let blue of [255, 0]) {
        for (let red of [255, 0]) {
          context.fillStyle = `rgba(${red},${green},${blue})`;
          context.fillRect(position, position, 40, 40);
          position += 20;
        }
      }
    }
    position -= 20;
    let positionx = position;
    positionx += 20;
    for (let green of [0, 255]) {
      for (let blue of [0, 255]) {
        for (let red of [0, 255]) {
          context.fillStyle = `rgba(${red},${green},${blue})`;
          context.fillRect(positionx, position, 40, 40);
          position -= 20;
          positionx += 20;
        }
      }
    }
    // 所谓对称
  },
};
</script>

<style scoped lang="scss">
.cubic_bizier {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>

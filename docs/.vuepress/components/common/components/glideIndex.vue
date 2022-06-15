<template>
  <div class="glide-index">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li
            class="glide__slide"
            v-for="(item, index) in Array(30)"
            :key="index"
          >
            <img
              :src="`https://picsum.photos/200/200?random=${index}`"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide, {
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";

export default {
  name: "GlideIndex",
  mounted() {
    new Glide(".glide", {
      startAt: 0,
      perView: 3,
    }).mount({ Controls, Breakpoints });
  },
};
</script>

<style lang="scss">
@import "~@glidejs/glide/src/assets/sass/glide.core";
@import "~@glidejs/glide/src/assets/sass/glide.theme";
</style>

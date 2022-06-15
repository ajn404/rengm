<template>
  <div>
    <h2>换一个仓库写gsap去了</h2>
    <div id="map"></div>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";

export default {
  name: "pixi-demo",
  mounted() {
    //pixi的hello
    let type = "WebGL";
    if (!PIXI.utils.isWebGLSupported()) {
      type = "canvas";
    }
    PIXI.utils.sayHello(type);
    // this.gooleStepTwo();
  },
  methods: {
    gooleStepTwo() {
      // The location of Uluru
      const uluru = { lat: -25.344, lng: 131.036 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
      });
    },
  },
};
</script>

<style scoped>
</style>

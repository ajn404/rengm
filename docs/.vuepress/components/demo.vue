<template>
<div>
  <div class="slider-demo-block">
    <el-slider v-model="value" vertical height="200px" />
  </div>

    <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
  <div class="demo-color-block">
    <span class="demonstration">With no default value</span>
    <el-color-picker v-model="color2" />
  </div>
</div>
</template>
<script lang="ts" setup>
import 'element-plus/dist/index.css'
import { ref } from 'vue'
const value = ref(20)
const color1 = ref('#409EFF')
const color2 = ref()
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}

</style>

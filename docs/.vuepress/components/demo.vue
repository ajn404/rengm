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

    <el-progress :percentage="stage" />

    <el-input-number v-model="stage"></el-input-number>

    <div>sCounter{{ sCounter }}</div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
import { ref, computed } from "vue";

//data
const value = ref(20);
const color1 = ref("#409EFF");
const color2 = ref();
const date = ref(new Date());

const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);

const stage = ref(50);

//store相关api
import { useStore } from "vuex";
const store = useStore();
// 用法1
const sCounter = computed(() => store.state.count);
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

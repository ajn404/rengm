<template>
  <div class="pageTop">
    <el-icon
      class="tools"
      v-on="{
        click: click,
        mouseenter: mouseenter,
        mouseup: mouseup,
        mouseleave: mouseleave,
      }"
    >
      <Tools />
    </el-icon>

    


    <div class="icon-box" ref="iconBox">
      <el-icon class="full-screen el-icon" @click="getFullScreen">
        <FullScreen />
      </el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FullScreen, Tools } from "@element-plus/icons-vue";
import { enterFullScreen, exitFullScreen } from "@/common/utils";
import { ref } from "vue";

const iconBox = ref(null);

const mouseup = () => {
  console.log("mouseup");
};

const click = () => {
  console.log("click");
  iconBox.value.style.display = "block";
};

const mouseenter = () => {
  iconBox.value.style.display = "block";
};

const mouseleave = () => {
  console.log("mousemouseleave");
};

const isFullScreen = ref(false);

const getFullScreen = () => {
  if (isFullScreen.value) {
    exitFullScreen();
    isFullScreen.value = false;
  } else {
    enterFullScreen();
    isFullScreen.value = true;
  }
};
</script>

<style lang="scss" scoped>
.pageTop {
  .tools {
    font-size: 1.2em;
  }
}

.icon-box {
  display: none;
  position: absolute;
  .el-icon {
    &.full-screen {
      &:hover {
        font-size: 1.5em;
        color: var(--c-brand);
      }
    }
  }
}
</style>

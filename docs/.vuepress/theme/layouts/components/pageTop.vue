<template>
  <div class="pageTop">
    <el-icon
      class="tools"
      v-on="{
        click: click,
      }"
    >
      <Tools />
    </el-icon>

    <div class="icon-box" ref="iconBox">
      <el-icon class="full-screen el-icon" @click="getFullScreen">
        <FullScreen />
      <span>{{isFullScreen?'退出全屏':'进入全屏'}}</span>
      </el-icon>
      <el-icon class="el-icon video-camera" @click="record"><VideoCamera /><span>录制</span></el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FullScreen, Tools ,VideoCamera} from "@element-plus/icons-vue";
// import { enterFullScreen, exitFullScreen ,screenRecord} from "@/common/utils";

import { ref } from "vue";

const iconBox = ref(null);

const mouseup = () => {
  console.log("mouseup");
};

const click = () => {
  if (iconBox.value.style.display === "flex") {
    iconBox.value.style.display = "none";
  } else 
  {
    iconBox.value.style.display = "flex";
  }
  
};

const mouseenter = () => {
  iconBox.value.style.display = "flex";
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


const record = ()=>{
  screenRecord()
}


</script>

<style lang="scss" scoped>
.pageTop {
  width: 100px;
  text-align: center;
  position: fixed;
  right: 3em;
  top: 9em;
  .tools {
    font-size: 1.5em;
    cursor: pointer;
    &:hover{
      color: var(--c-brand);
    }
    
    

  }
}

.icon-box {
  display: none;
  position: absolute;
  top: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap:.5em;
  .el-icon{
    width: 100%;
    cursor: pointer;
    &:hover{
      color: var(--c-brand);
    }
  }

}
</style>

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


const doc = document;
const html = doc.documentElement;
const enterFullScreen = () => {
  const enter =
    html.requestFullscreen ||
    html.webkitRequestFullScreen ||
    html.mozRequestFullScreen ||
    html.msRequestFullscreen;
  enter && enter.call(html);
};

const exitFullScreen = () => {
  const exit =
    doc.exitFullscreen ||
    doc.webkitCancelFullScreen ||
    doc.mozCancelFullScreen ||
    doc.msExitFullscreen;
  exit && exit.call(doc);
};

//定义el-loading加载样式
const loading = () => {
  return ElLoading.service({
    lock: true,
    text: "加载中",
    fullscreen: true,
    background: "rgba(0, 0, 0, 0.7)",
  });
};

const screenRecord = async () => {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const mine = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";
  let mediaRecoder = new MediaRecorder(stream, {
    mimeType: mine,
  });
  let chunks = [];
  mediaRecoder.addEventListener("dataavailable", function (e) {
    chunks.push(e.data);
  });
  mediaRecoder.addEventListener("stop", function () {
    let blob = new Blob(chunks, {
      type: chunks[0].type,
    });
    let url = URL.createObjectURL(blob);
    // let video = document.querySelector(".video");
    // video.src = url;

    let a = document.createElement("a");
    a.href = url;
    a.download = "video.webm";
    a.click();
  });
  mediaRecoder.start();
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
  z-index:9999;
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

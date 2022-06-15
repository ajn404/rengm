<template>
<div class="full-screen">
  <el-button type="primary" @click="enter">进入全屏</el-button>
  <el-button  @click="exit">退出全屏</el-button>
  <el-button type="primary" @click="enter_exit">全屏</el-button>
</div>
</template>

<script>
import {enterFullScreen,exitFullScreen} from "./base/enterFullscreen";

export default {
  name: "FullScreen",
  data(){
    return{
      isFullscreen:false,
    }
  },
  methods:{
    enter(){
      enterFullScreen();
      this.isFullscreen = true;
    },
    exit(){
      exitFullScreen()
      this.isFullscreen = false;
    },
    enter_exit(){
      if(this.isFullscreen){
        this.exit()
      }else{
        this.enter()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.full-screen{
  display: flex;
  flex-direction: column;
  gap:10px;
  ::v-deep .el-button{
    width: 100%;
    margin: 0;

  }
}
</style>
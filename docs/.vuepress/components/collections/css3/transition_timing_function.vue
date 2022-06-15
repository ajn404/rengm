<template>
  <div class="box">
    <el-button @click="handelClick">触发</el-button>
    <div class="items" @click="handelClick">
      <div 
      class="item" 
      :class="showTransition" 
      v-for="(item,index) in new Array(8)"
      :key="index"
      >
      <span class="fixed">{{functionName[index]}}</span>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transition_timing_function",
  data() {
    return {
      showTransition: '',
      functionName:['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear','step-start','step-end','cubic-bezier(0,-1.5,1,1.5)']
    }
  },
  methods: {
    handelClick() {
      this.showTransition = this.showTransition ? '' : 'transition'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~element-plus/dist/index.css";

.box {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vh;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2em;
  color: #fff;
  position: relative;


  .item {
    width: 5em;
    height: 5em;
    line-height: 5em;
    text-align: center;
    vertical-align: middle;
    transition-property: margin-left;
    transition-duration: 2s;
    white-space: nowrap;
    span.fixed{
      position: absolute;
      left: 0;
      text-align: center;
      width: 100%;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 600;
      font-size: 2em;
      opacity: .5;
    }
    //transition-delay: 2s;
    &.transition {
      margin-left: 50vw;

    }
  }

  //下面两个可以写在一起，练习一下scss嘛
  $list: ease, ease-in, ease-out, ease-in-out, linear,step-start,step-end,cubic-bezier(0,-1.5,1,2.5);
  @for $i from 1 through 8 {
    .item:nth-child(#{$i}) {
      background-color: rgb(random(235), random(235), random(235));
    }
  }

  @each $c in $list {
    $i: index($list, $c);
    .item:nth-child(#{$i}) {
      transition-timing-function: $c;
    }
  }
}
</style>
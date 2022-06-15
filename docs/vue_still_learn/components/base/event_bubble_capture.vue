<template>

  <div class="all-box">
    <div class="event_bubble_capture" contenteditable="false">
      <p>点击触发</p>
      <h4>
        addEventListener第三个参数默认为false，表示机制为事件冒泡，自下而上触发事件
      </h4>
      <div class="button-a" ref="button-a">
        a
        <div ref="button-b" class="button-b">b</div>
      </div>
      <p v-if="res1">输出为{{ res1.name }}</p>
      <h4>
        addEventListener第三个参数为true，表示机制为事件捕获，自上而下触发事件
      </h4>
      <div class="button-c" ref="button-c">
        c
        <div ref="button-d" class="button-d">d</div>
      </div>
      <p v-if="res2">输出为{{ res2.name }}</p>
    </div>
    <dialog_drag></dialog_drag>
  </div>
</template>

<script>
import { reactive } from "vue";
import dialog_drag from "../advanced/dialog_drag";
export default {
  setup() {
    const res1 = reactive({ name: "" });
    const res2 = reactive({ name: "" });
    return {
      res1,
      res2,
    };
  },
  components:{
    dialog_drag
  },
  mounted() {
    this.defineBubble();
    this.defineCapture();
  },
  methods: {
    defineBubble() {
      let that = this;
      let txt = "";
      let targetA = this.$refs["button-a"];
      targetA.addEventListener("click", function (e) {
        e.preventDefault();
        txt += "a";
        that.res1.name = txt.split("").join("=>");
        txt=''
      });
      let targetB = this.$refs["button-b"];
      targetB.addEventListener("click", function (e) {
        e.preventDefault();
        txt += "b";
        that.res1.name = txt.split("").join("=>");
      });
    },
    defineCapture() {
      let txt = "";
      let that = this;
      let targetA = this.$refs["button-c"];
      targetA.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          if(txt) txt=''
          txt += "c";
          that.res2.name = txt.split("").join("=>");
        },
        true
      );
      let targetB = this.$refs["button-d"];
      targetB.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          txt += "d";
          that.res2.name = txt.split("").join("=>");
          txt=''
        },
        true
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "~element-plus/dist/index.css";
.all-box{
  border: 2px solid;
  border-color:#666666 #00ff00 #888888 #0d84ff;
  padding: 20px;
  border-radius: 10px;
  &::after{
    content: ' ';
    display: block;
    width: 60px;
    height: 20px;
    background-color: #8c939d;
    transform: rotate(25deg) translate(-41%,181%);
  }
  &::before{
    content: ' ';
    display: block;
    width: 60px;
    height: 20px;
    background-color: #8c939d;
    transform: rotate(-25deg) translate(-50%,-181%);
  }
}
.event_bubble_capture {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button-a,
  .button-c {
    width: 100px;
    height: 100px;
    background-color: rgb(random(235), random(235), random(235));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    .button-b,
    .button-d {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      background-color: rgb(random(235), random(235), random(235));
    }
    .button-d {
      background-color: rgb(random(235), random(235), random(235));
    }
  }
  .button-c {
    background-color: rgb(random(235), random(235), random(235));
  }
}
</style>

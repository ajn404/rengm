// 剑指offer003 用两个栈实现队列
<template>
  <div class="stack">
      <canvas id="stack_canvas" width="500" height="500"></canvas>
  </div>
</template>
<script lang="ts">
class CQueue {
    stack1: number[]
    stack2: number[]
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    appendTail(value: number): void {
        this.stack1.push(value)
    }
    deleteHead(): number {
        if (this.stack2.length > 0) {
            return this.stack2.pop()
        } else if (this.stack1.length > 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop())
            }
            return this.stack2.pop()
        } else {
            return -1
        }
    }
}
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

        var obj = new CQueue();
        for(let i=10;i>0;i--){
            obj.appendTail(i);
        }
        console.log(obj);
        var head = obj.deleteHead();
        console.log(head);
        console.log(obj);
        
    },
})
</script>


<style>
#stack_canvas{
    background-color: #000;
}

</style>
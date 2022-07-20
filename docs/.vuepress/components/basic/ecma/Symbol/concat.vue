
<template>
    <div class="concat">
        {{time}}
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

let arrA=[],arrB=[];
console.time()
for(let i = 0;i<Math.pow(2,10);i++){
    arrA.push(i)
    arrB.push(-i)
}


console.timeEnd()


</script>



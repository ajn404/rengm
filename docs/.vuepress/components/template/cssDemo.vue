<template lang="pug">
div(v-if="props.cssPractice==='demo1-1'") <Demo1_1/>
div(v-if="props.cssPractice==='demo2-1'") <Demo2_1/>


div(v-else) css布局联系

</template>

<script setup lang="ts">
import {
  defineProps
} from "vue";
import Demo1_1 from './cssDemos/Demo1_1.vue';
import Demo2_1 from './cssDemos/Demo2_1.vue';

const props = defineProps({
  cssPractice:String
});
</script>

<style scoped lang="scss">

</style>
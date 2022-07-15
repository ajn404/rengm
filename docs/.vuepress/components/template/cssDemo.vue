<template lang="pug">
div(v-if="props.cssPractice==='demo1-1'") <Demo1_1/>
div(v-else-if="props.cssPractice==='demo2-1'") <Demo2_1/>
div(v-else-if="props.cssPractice==='demo2-2'") <Demo2_2/>
div(v-else-if="props.cssPractice==='demo3-1'") <Demo3_1/>
div(v-else-if="props.cssPractice==='demo3-2'") <Demo3_2/>
div(v-else) css布局联系
</template>

<script setup lang="ts">
import {
  defineProps
} from "vue";
import Demo1_1 from './cssDemos/Demo1_1.vue';
import Demo2_1 from './cssDemos/Demo2_1.vue';
import Demo2_2 from './cssDemos/Demo2_2.vue';
import Demo3_1 from './cssDemos/Demo3_1.vue';
import Demo3_2 from './cssDemos/Demo3_2.vue';

const props = defineProps({
  cssPractice:String
});
</script>
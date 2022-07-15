<template lang="pug">
.symbol
    div(v-if="ecmaPractice==='demo1_1'") <demo1_1/>
    div(v-else-if="ecmaPractice==='demo1_2'") <wellKnownSymbol/>
    div(v-else) ecma Symbol 练习
</template>
<script lang="ts" setup>
import demo1_1 from './Symbol/demo1_1.vue'
import wellKnownSymbol from './Symbol/wellKnownSymbol.vue'


import {
  defineProps
} from "vue";
const props = defineProps({
  ecmaPractice:String
});
</script>

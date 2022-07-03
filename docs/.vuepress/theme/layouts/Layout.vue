<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './pageTop.vue'
import pageBottom from "./pageBottom.vue";
import {ref} from 'vue'
const style = ref(true)
const click = ()=>{
  style.value = !style.value
}
</script>
<template>
  <ParentLayout>
    <template #sidebar-top></template>
    <template #sidebar-bottom></template>
    <template #navbar-before></template>
    <template #navbar-after>
      <el-button text @click="click" class="change-style">删除插槽</el-button>
    </template>
    <template #page-bottom>
      <page-bottom v-if="style"></page-bottom>
    </template>
    <template #page-top>
      <page-top v-if="style"></page-top>
    </template>
  </ParentLayout>
</template>

<style lang="scss" scoped>
.my-footer {
  text-align: center;
}
.change-style{
  padding: 0;
  margin-left: 1.5rem;
  height: 100%;
  font-size: .9rem;
  color: var(--c-text);
  line-height: 1.4rem;
  background: var(--c-bg)!important;
  // transition-duration: .5s;
  &:hover{
  // transform: rotate(360deg);
  color: var(--c-brand);
  }
}
</style>
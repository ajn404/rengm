<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './pageTop.vue'
import pageBottom from "./pageBottom.vue";
</script>
<template>
  <ParentLayout>
    <template #page-bottom>
     <page-bottom></page-bottom>

    </template>
    <template #page-top>
      <page-top></page-top>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
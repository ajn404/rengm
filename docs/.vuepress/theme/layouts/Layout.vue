<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './pageTop.vue'
import pageBottom from "./pageBottom.vue";
</script>
<template>
  <ParentLayout>
    <template #sidebar-top>
      <el-image
        style="width: 50%; height: 100px;display:block; margin: 20px auto"
        src="https://images3.alphacoders.com/116/thumb-1920-1163888.jpg"
        fit="cover"
      />
    </template>

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
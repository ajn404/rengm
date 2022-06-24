<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './pageTop.vue'
</script>
<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer"> ⚡🐵🐒🦮🐕‍🦺🦝😄😂😉😇😍🤑🤭💐🌼 </div>
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
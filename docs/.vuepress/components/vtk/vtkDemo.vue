<template>
  <ClientOnly>
    <vtkDemoInner></vtkDemoInner>
  </ClientOnly>
</template>

<script setup>
import vtkDemoInner from './components/vtkDemoInner.vue'
import {ClientOnly} from '@vuepress/client'
</script>

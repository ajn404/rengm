<template>
    <ClientOnly>
    <pdr-reader-inner></pdr-reader-inner>
  </ClientOnly>

</template>

<script setup>
import pdrReaderInner from './components/pdrReaderInner.vue'
import {ClientOnly} from '@vuepress/client'

</script>

<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './components/pageTop.vue'
import pageBottom from "./components/pageBottom.vue";
import { ref, onActivated, nextTick,onMounted,watchEffect,watch } from 'vue'
import { ElMessage } from 'element-plus'

const style = ref(true)
const click = () => {
    style.value = !style.value
    // ElMessage.warning("没有做持久化，刷新还是会重置")
}

import { useRoute } from 'vue-router'

const route = useRoute()
let showCustomLayout = ref(false); 

watch(route,()=>{
    showCustomLayout.value = route.meta.customLayout == false ? false : true
})

</script>
<template>
    <ParentLayout class="parent-layout">
        <template #sidebar-top>

        </template>
        <template #sidebar-bottom></template>
        <template #navbar-before></template>
        <template #navbar-after>
            <el-button v-if="showCustomLayout" text @click="click" class="change-style">{{style?'😭':'😊'}}</el-button>
        </template>
        <template #page-bottom>
            <page-bottom v-if="showCustomLayout && style"></page-bottom>
        </template>
        <template #page-top>
            <page-top></page-top>
        </template>
    </ParentLayout>
</template>

<style lang="scss" scoped>
.parent-layout{
.my-footer {
    text-align: center;
}

.change-style {
    padding: 0;
    margin-left: 1.5rem;
    height: 100%;
    font-size: 0.9rem;
    color: var(--c-text);
    line-height: 1.4rem;
    background: var(--c-bg) !important;
    // transition-duration: .5s;
    &:hover {
        // transform: rotate(360deg);
        color: var(--c-brand);
    }
}
}


</style>
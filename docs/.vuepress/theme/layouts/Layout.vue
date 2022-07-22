<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import pageTop from './components/pageTop.vue'
import pageBottom from "./components/pageBottom.vue";
import { ref, onActivated, nextTick,onMounted,watchEffect,watch } from 'vue'
import { ElMessage } from 'element-plus'
import { isClient } from "@vueuse/core";


const style = ref(true)
const click = () => {
    style.value = !style.value
    // ElMessage.warning("没有做持久化，刷新还是会重置")
}

import { useRoute } from 'vue-router'

const route = useRoute()
let showCustomLayout = ref(false); 

if(!isClient){
    showCustomLayout = false
}

const isC = ref(isClient)

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
            <Client-only>
            <page-top class="page-top" v-if="isC && style"></page-top>
            </Client-only>

        </template>
    </ParentLayout>
</template>

<style lang="scss" scoped>
.parent-layout{
.my-footer {
    text-align: center;
}

:deep(.page .theme-default-content){
    min-height: 70vh;
}



.change-style {
    padding: 0;
    margin-left: 1.5rem;
    height: 100%;
    font-size: 0.9rem;
    color: var(--c-text);
    line-height: 1.4rem;
    background: transparent;
    &:hover{
        background: var(--c-bg);
    }
}
}


@media (max-width:1000px) {
    .page-top{
        display: none;
    }
}


</style>
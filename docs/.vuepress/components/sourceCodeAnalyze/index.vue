<template>
    <div class="source-code-analyze">
        <el-container>
            <el-header>
                <el-link href="../" class="home">首页</el-link>
            </el-header>
            <el-main class="v_book--codeAnalyze_main">
                <el-card class="box-card vertical-center" v-for="o in 4" :key="o" shadow="hover">
                    <div class="card-box vertical-center" :class="['card-box'+o]">
                        <div>element源码分析{{o}}</div>
                        <div v-if="o===1">
                            theme-chalk
                        </div>
                    </div>

                </el-card>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import themeChalk from "./components/themeChalk";
    export default {
        name: "elementAnalyze",
        methods:{

        },
        components:{
            themeChalk
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common/styles/not-common";
</style>

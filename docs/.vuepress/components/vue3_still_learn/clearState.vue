<template>
    <div class="clearState">
        <el-button type="primary" @click="clearCount">置零count</el-button>
        <span>{{count}}</span>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "clearState",
        computed: {
            ...mapState(['count']),
        },
        methods:{
            clearCount(){
                // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
                this.$store.commit('clearCount')
            }
        }
    }
</script>

<style scoped>
.clearState {
    display: flex;
    padding: 20px;
    justify-content: space-between;
}
span{
    background: val(--c-danger-text);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
}
</style>

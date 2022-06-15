<template>
    <div class="vuex-learn">
        <el-button @click="increment" type="primary">触发mutation</el-button>
        <span>{{count}}</span>
    </div>
</template>

<script>
    import {mapGetters,mapState} from 'vuex'
    import {ElMessageBox,ElMessage} from 'element-plus'

    export default {
        name: "vuex_learn",

        computed: {
            ...mapState(['count']),
            // count() {
            //     return this.$store.state.count
            // }
        },

        mounted() {
            console.log(this.$store.state.count)
        },

        methods: {
            increment() {
                this.$store.commit('increment');
                if(this.count>10){
                    this.showMessage()
                }
            },
            showMessage(){
                ElMessageBox.alert('count的值已达到'+this.count+',请停止触发', '注意注意', {
                    confirmButtonText: '好的',
                    showCancelButton: true,
                    cancelButtonText:'我偏不',
                    callback: (action) => {
                        let message;
                        if(action==='cancel'){
                            message='qq1423238345,来对线'
                        }else{
                            message='nice boy'
                        }

                        ElMessage({
                            type: 'info',
                            message: message,
                        })
                    },
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~element-plus/dist/index.css';

    .vuex-learn {
        display: flex;
        padding: 20px;
        justify-content: space-between;

        span{
            background: val(--c-danger-text);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2em;
        }
    }
</style>

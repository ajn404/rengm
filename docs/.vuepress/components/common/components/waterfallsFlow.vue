<template>
<el-container>
<el-main class="image-box ">
    懒加载
    <el-image v-for="item in picList" :src="item.download_url" :key="item.id" :preview-src-list="previewList" lazy ></el-image>
</el-main>
</el-container>
</template>
<script>
    import {getPisc,getSaoHua} from '../utils/service'
    import {ref} from 'vue'
    export  default {
        name:'waterfallsFlow',
        data(){
          return{
              picList:[],
              previewList:[]
          }
        },
        created() {

        },
        mounted() {
            getPisc().then(res=>{
                this.picList = res;
                let temp = []
                res.map(
                    (item)=>{
                        temp.push(item.download_url)
                    }
                )
                this.previewList = ref(temp)
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import '~element-plus/dist/index.css';
    .image-box{
    width: 50vw;
    height: 100vh;
    margin: 20px auto;
    overflow: auto;
}
</style>

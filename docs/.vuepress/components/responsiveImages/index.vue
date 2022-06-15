<template>
    <div class="resIma">
        <div class="flex-box">

            <div v-for="item in fakeData.slice(0,21)" class="fake-images" :key="item.itemCity">
                <el-image src="https://picsum.photos/1920/1080"  class="image-item">
                    <template #error>
                        <div class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </template>
                </el-image>
            </div>
        </div>

        <h4>
            flex布局
        </h4>
       <div class="flex-item1">
           <span>{{fakeData[0].itemGit}}</span>
       </div>
    </div>

</template>

<script lang="ts">
    import * as faker from 'faker'

    export default {
        name: "index",
        mounted(): void {

        },
        data() {
            let fakeData = [];
            for (let i = 0; i < 100; i++) {
                let {itemCity, itemUrl,itemGit} = {
                    itemCity:faker.address.city(),
                    itemUrl:faker.image.image(),
                    itemGit:faker.git.branch()
                }
                fakeData.push({itemCity, itemUrl,itemGit})
            }
            // console.log(fakeData)

            return {
                fakeData
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../common/styles/responsiveImages/index";

</style>

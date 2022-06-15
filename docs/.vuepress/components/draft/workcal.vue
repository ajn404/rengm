<template>
    <div>
        <pre>
            {{data}}
        </pre>
    </div>
</template>
<script>
    import {getXuanjianghui} from "./api/inde";
    import axios from 'axios'
    export default {
        name:'workcal',
        data(){
            return {
                data:{}
            }
        },
        mounted() {
            try {
                getXuanjianghui().then(
                    res=>{
                        this.data =res
                    },
                    error=>{
                        console.log(error)
                    }
                );
            }catch (e) {
                console.log(e)
            }

            // axios.get('https://91.usst.edu.cn/API/Meet/GetCampusRecruList').then(res=>{
            //     console.log(res)
            // })

        }
    }
</script>
<style scoped>

</style>

<template>
    <div>
        <p>
            {{data.time}}
            {{data.name}}
            {{data.thing}}
        </p>
    </div>

</template>

<script>
    export default {
        name: "my-demo",
        data(){
            return{
                data:{
                    time:'2015',
                    name:'n-graymoon',
                    thing:'graduate',
                }
            }
        }
    }
</script>

<style scoped>

</style>
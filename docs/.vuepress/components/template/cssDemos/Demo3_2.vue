<template lang="pug">
.opacityBorder 
    .example1 background-clip: padding-box;
</template>

<style lang="scss" scoped>
.opacityBorder{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    div{
        width: 100%;
    
    }
    .example1{
        border:10px solid hsla(0,0%,100%,.5);
        background: #ffffff ;
        background-clip: padding-box;
        height: 30px;
        text-align: center;
        line-height: 30px;
        
    }

}
</style>
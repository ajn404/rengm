<template lang="pug">
.cssDemo
    header.header some text...
</template>

<style scoped lang="scss">
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    .cssDemo{
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7;
        color: #777;
    }

    header.header{
        height: 95vh;
        background-image: url("/images/background.jpg");
        background-size: 100%;
        background-position: top;
        background-repeat: no-repeat;
    }

</style>
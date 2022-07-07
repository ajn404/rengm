<template lang="pug">
.cssDemo
    header.header
        marquee(
            width="50%",
            direction="left"
        )
            span Now And Then You Miss It Sounds Make You Cry
            span Now In - MoMa Sharing Exhibition NOW
            span NYC Opens After Long Lockdown Check
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
        position: absolute;
        left:0;
        width: calc(100vw - 17px);
        top: var(--navbar-height);
    }

    header.header{
        height: 95vh;
        background-image: url("/images/background.jpg");
        background-size: 100%;
        background-position: top;
        background-repeat: no-repeat;
    }

</style>
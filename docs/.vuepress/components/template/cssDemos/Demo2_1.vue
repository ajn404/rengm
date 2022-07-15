<template lang="pug">
.container
    - for (var i = 1; i <= 25; i++)
        .square 
</template>
<style scoped lang="scss">
.container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 500px;
    animation: rotate 5s infinite;
    perspective: 600px;
    // &:hover { animation-play-state: paused; }
    margin: 2em auto;
}

.square {
    width: 18%;
    height: 18%;
    border-radius: 50%;
    margin: 1%;
    background-color: rgba(255,255,255, .5);
    animation: rotate 10s infinite;
}

$n:25;
@while $n > 0 {
    .square:nth-child(#{$n}){
        animation-delay:0s+200ms*$n;
        background-color: rgba(10 * $n,255 - 10 * $n,255, $n * 0.02);
    }
    $n: $n - 1;
}

@keyframes rotate {
    25% { transform: rotateY(-180deg); }
    50% { transform: rotateY(-180deg) rotateX(-180deg); }
    75% { transform: rotateY(-180deg) rotateX(-180deg) rotateY(180deg); }
    100% { transform: rotate(0); }
}

</style>
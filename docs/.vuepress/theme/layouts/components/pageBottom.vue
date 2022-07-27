<template lang="pug">
.page-bottom
  .footer
    .bubbles
        - for (var i = 0; i < 120; i++) //Small numbers looks nice too
            .bubble(
                style=`--size:${2 + Math.random() * 4}rem; --distance:${6 + Math.random() * 4}rem; --position:${-5 + Math.random() * 110}%; --time:${2 + Math.random() * 2}s; --delay:${-1 * (2 + Math.random() * 2)}s;`
            )
    .content
        div
            div
                b 底部索引
            
            div
                b 思维拓展
                RouterLink(to="/mindExpand/README") 关于
                RouterLink(to="/mindExpand/p5-start") p5 start
                RouterLink(to="/mindExpand/p5-sound") p5 sound
                RouterLink(to="/mindExpand/reference") p5 接口参数
                RouterLink(to="/mindExpand/canvas") canvas 原生
                RouterLink(to="/mindExpand/3d-basic") 3d 基本原理
            div
                b 数据可视化
                RouterLink(to="/dataVisualization/README") 关于
                RouterLink(to="/dataVisualization/echartsAdvanceUse") 高级使用
                RouterLink(to="/dataVisualization/dynamicEcharts") 动态echarts
            div
                b element-plus使用
                RouterLink(to="/elementPlus/") 关于
                RouterLink(to="/elementPlus/eleButton") element buttons    
            div 
                el-button.bottomButton(
                    @click.once="bottomButtonClick"
                            ) 底部按钮    
        div
            a.image(
                href="https://codepen.io/z-",
                target="_blank",
                style="background-image: url(\"/images/logo.png\")"
            )
            p ©2022 Ajn404
        
svg(style="position: fixed; top: 100vh")
    defs
        filter#blob
            feGaussianBlur(
                in="SourceGraphic",
                stdDeviation="10",
                result="blur"
            )
            feColorMatrix(
                in="blur",
                mode="matrix",
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                result="blob"
            )
            feComposite(in="SourceGraphic" in2="blob" operator="atop") 
</template>

<script setup>
import {ElMessage} from 'element-plus'
const bottomButtonClick = ()=>{
    ElMessage.warning("啥都没写")
}

</script>

<style scoped lang="scss">
.page-bottom {
    display:grid;
    grid-template-rows: 1fr 10rem auto;
    grid-template-areas:"main" "." "footer";
    overflow-x:hidden;
    .footer {
        z-index: 1;
        display:grid;
        position: relative;
        grid-area: footer;
        min-height:12rem;
        .bubbles {
            position: absolute;
            top:0;
            left:0;
            right:0;
            height:1rem;
            background:var(--c-brand);
            filter:url("#blob");
            .bubble{
                position: absolute;
                left:var(--position, 50%);
                background:var(--c-brand);
                border-radius:100%;
                animation:bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
                    bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
                transform:translate(-50%, 100%);

            }
            .bubble:nth-child(n+64) {
                background:var(--c-brand);
            }
        }
        .content {
            z-index: 2;
            display:grid;
            grid-template-columns: 1fr auto;
            grid-gap: 4rem;
            padding:2rem;
            background:var(--c-brand);
            .bottomButton{
                width: 7em;
                background: var(--c-brand);
                border: none;
                color:#F5F7FA;
                font-size:1rem;
                padding: 0;
                text-align: left;
                justify-content: left;
            }

            a, p {
                color:#F5F7FA;
                text-decoration:none;
                white-space: pre;
            }
            b {
                color:white;
            }
            p {
                margin:0;
                font-size:.75rem;
            }
            >div {
                display:flex;
                flex-direction:column;
                justify-content: center;
                >div {
                    margin:0.25rem 0;
                    >* {
                        margin-right:.5rem;
                    }
                }
                .image {
                    align-self: center;
                    width:4rem;
                    height:4rem;
      
                    margin:0.25rem 0;
                    background-size: 100%;
                    background-repeat:no-repeat;
                    background-position: center;
                }
            }
        }
    }
}

@keyframes bubble-size {
    0%, 75% {
        width:var(--size, 4rem);
        height:var(--size, 4rem);
    }
    100% {
        width:0rem;
        height:0rem;
    }
}
@keyframes bubble-move {
    0% {
        bottom:-4rem;
    }
    100% {
        bottom:var(--distance, 10rem);
    }
}

</style>
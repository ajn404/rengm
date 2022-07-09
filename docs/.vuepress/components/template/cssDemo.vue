<template lang="pug">
.cssDemo
    header.header
        marquee(
            width="100%",
            direction="left"
        )
            p 诺艾尔神教宣言
            p 托尔斯泰：诺艾尔不是因为美丽才可爱，而是因为可爱才美丽。
            p 屠格涅夫：先相信自己，然后诺艾尔才会相信你。
            p 哥白尼：人的天职在于勇敢深索开高达。
            p 爱迪生：女仆控，就是99%的hentai，加上1%的真爱。
            p 爱因斯坦：控女仆比推倒女仆更重要。推倒女仆只是生理上满足自私，而控女仆则是需要审美和追求，这也标志着科学的真正进步。
            p 托尔斯泰：诺艾尔不是一种享乐，而是一种沉重的存在。
            p 培根：高达就是力量。
            p 钢铁是怎样炼成的：人最宝贵的东西是生命，生命对人来说只有一次。因此，人的一生应当这样度过：当一个人回首往事时，不因没追求刻晴而悔恨，也不因喜欢可丽而羞愧；这样，在他临死的时候,能够说，我把整个生命和全部精力都献给了人生最宝贵的事业一一为诺艾尔的解放而奋斗。
            p 罗曼罗兰：诺艾尔最沉重的负迫不是铠甲，而是黑丝裤袜。
            p 牛顿：如果我比别人看得更远的话，那是因为我有诺艾尔。
            p 雨果：诺艾尔是人们必须的。没有诺艾尔的人是不会幸福的。
            p 爱因斯坦：一个诺艾尔的价值，不应该看他得到了什么，而一个看他为诺艾尔贡献了什么。
            p 高尔基：诺艾尔是人类进步的阶梯。
            p 海明威：人可以被消灭，不可以没诺艾尔！
            p 孔子：三人行必有诺艾尔，择其萌者而控之。孙子：女仆，国之大事，不可不察也。汉光武帝：有女仆，事竟成。
            p 谚云：万般皆下品，唯有女仆好。
            p 居礼夫人：弱者等待女仆，强者创造高达。
            p 爱迪生：女仆能增进快乐，减少痛苦。
            p 颜之推：积财千万，不如女仆在身。
            p 西谚云：伟人的后面必定有一位伟大的女仆。 ​
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
        color: rgba(255,255,255,.3);
        position: absolute;
        left:0;
        /*width: calc(100vw - 17px);*/
        /*height: calc(100vh - 3.6rem);*/
        /*overflow: hidden;*/
        top: var(--navbar-height);
    }

    header.header{
        height: 100%;
        background-image: url("/images/background.jpg");
        background-size: 100%;
        background-position: top;
        background-repeat: no-repeat;
    }

</style>
<template>
    <div class="huozai">
        <el-input v-model="inputValue" v-show="buttonShow"></el-input>
        <el-button @click="initType" v-show="buttonShow"> 开始</el-button>
        <div class="element" v-show="!buttonShow"></div>
        <el-image :src="imageUrl" v-show="imageUrl" lazy></el-image>
        <search-input></search-input>
    </div>
</template>

<script>
    import * as Typed from "typed.js";
    import SearchInput from '../../../common/components/searchInput.vue';

    export default {
        name: "huozai",
        data() {
            return {
                buttonShow: true,
                inputValue: '',
                imageUrl: '',
                list: [
                    {
                        title: "活在这珍贵的人间",
                        string: [
                            "活在这珍贵的人间",
                            "太阳强烈",
                            "水波温柔",
                            "一层层白云覆盖着",
                            "我",
                            "踩在青草上",
                            "感到自己是彻底干净的黑土块",
                            "活在这珍贵的人间",
                            "泥土高溅",
                            "扑打面颊",
                            "活在这珍贵的人间",
                            "人类和植物一样幸福",
                            "爱情和雨水一样幸福",
                        ],
                        imageUrl: 'https://images3.alphacoders.com/123/thumb-1920-1235167.jpg'
                    },
                    {
                        title: "九月",
                        string: [
                            "目击众神死亡的草原上野花一片",
                            "远在远方的风比远方更远",
                            "我的琴声呜咽 ",
                            "泪水全无",
                            "我把这远方的远归还草原",
                            "一个叫木头 ",
                            "一个叫马尾",
                            "我的琴声呜咽 ",
                            "泪水全无",

                            "远方只有在死亡中凝聚野花一片",
                            "明月如镜 ",
                            "高悬草原 ",
                            "映照千年岁月",
                            "我的琴声呜咽 ",
                            "泪水全无",
                            "只身打马过草原",
                        ],
                        imageUrl: "https://images3.alphacoders.com/119/thumbbig-1197606.webp",
                    },
                    {
                        title: '十四行诗一',
                        string: [
                            'From fairest creatures we desire increase',
                            'That thereby beauty\'s rose might never die',
                            'But as the riper should by time decease',
                            'His tender heir might bear his memory',
                            'But thou contracted to thine own bright eyes',
                            'Feed\'st thy light\'s flame with self-substantial fuel',
                            'Making a famine where abundance lies',
                            'Thy self thy foe, to thy sweet self too cruel',
                            'Thou that art now the world\'s fresh ornament',
                            'And only herald to the gaudy spring',
                            'Within thine own bud buriest thy content',
                            'And tender churl mak\'st waste in niggarding:',
                            'Pity the world, or else this glutton be',
                            'To eat the world\'s due, by the grave and thee',
                        ],
                        // imageUrl: "https://images3.alphacoders.com/123/thumb-1920-1232833.jpg",
                    }
                ],
            };
        },
        components:{SearchInput},
        mounted() {
            let that = this;
            this.$nextTick(function () {
                // that.initType()

            });
        },
        methods: {
            initType() {
                let typedString = "";
                this.buttonShow = false;
                this.list.find((item) => {
                    if (item.title.indexOf(this.inputValue) !== -1) {
                        typedString = item.string;
                        this.imageUrl = item.imageUrl;
                    }
                });

                let homeTypedFont = new Typed(".element", {
                    strings: typedString,
                    typeSpeed: 100,
                    backSpeed: 10,
                    showCursor: false,
                    loop: false,
                    onComplete: () => {
                        this.buttonShow = true;
                        this.imageUrl = ''
                    },
                });
                return homeTypedFont;
            },
        },
    };
</script>

<style lang='scss'>
    @import "~element-plus/dist/index.css";

    .huozai {
        display: flex;
          flex-direction: column;
        align-items: center;
        justify-content: center;
        /*height: calc(80vh - 3.6rem);*/
        gap: 20px;
        .element {
            font-size: 2em;
            width: 100%;
            line-height: 100vh;
            text-align: center;
            color:white;
            background-image: url("https://images3.alphacoders.com/123/thumb-1920-1232833.jpg");
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            height: 100%;
        }

        
    }
</style>
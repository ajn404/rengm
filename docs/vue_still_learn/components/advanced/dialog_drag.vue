<template>
    <div class="dialog-box">
        <el-input placeholder="placeholder" style="margin-top: 10vh;width: 20em" v-focus  v-model="inputString"></el-input>
        <el-tag type="success" v-heightLight="'10vh'">Tag 2</el-tag>
        <h4>自由移动块(自由度高，且设置了z-index)</h4>
        <div class="box" v-drag>
                <el-button type="primary" class="control"  @click="open">move me</el-button>
        </div>
    </div>
</template>

<script>
    import {reactive, ref, h} from 'vue'
    import {ElNotification} from 'element-plus'

    export default ({
        setup() {
            const dialogVisible = reactive({value: false});
            return {
                dialogVisible,
                inputString: ref('')
            }
        },
        methods: {
            handelClick() {
                this.dialogVisible.value = true
            },
            open(){
                ElNotification({
                    title: 'wow',
                    message: h('i', { style: 'color: teal'}, 'you clicked me'),
                })
            }
        },
        directives: {
            focus: {
                mounted(el) {
                    el.focus()
                }
            },
            heightLight: {
                beforeMount(el, binding, vNode) {
                    el.style.margin = binding.value;
                },
            },
            drag: {
                mounted(el) {
                    const dragDom = el.querySelector('.control');
                    dragDom.style.cursor = 'move';
                    dragDom.onmousedown = (e) => {

                        e.stopPropagation();
                        const disX = e.clientX- Number(el.style.left.replace('px',''));
                        const disY = e.clientY-Number(el.style.top.replace('px',''));

                        document.onmousemove = (e) => {//用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                            let left = e.clientX;
                            let top = e.clientY;
                            el.style.left = left - disX  + 'px';
                            el.style.top = top - disY + 'px';
                        };
                        document.onmouseup = (e) => {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        }
                    }
                }
            }
        }
    })
</script>
<style scoped>
    .dialog-box {

    }

    .box {
        width: 50px;
        height:50px;
        position: relative;
        z-index: 9999;
    }

    .box .control {
        width: 100px;
        height: 20px;
    }
</style>

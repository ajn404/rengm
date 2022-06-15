<template>
    <div>
        <video class="video" controls="controls" width="600px"></video>
        <el-button @click="buttonClick" type="primary">开始录制</el-button>
    </div>
</template>

<script>
    // import {reactive} from 'vue'

    export default {
        name: "screenRecord",
        methods: {
            async buttonClick() {
                let stream = await navigator.mediaDevices.getDisplayMedia({
                    video: true
                })
                const mine = MediaRecorder.isTypeSupported("video/webm;codecs=vp9") ? "video/webm;codecs=vp9" : "video/webm"
                let mediaRecoder = new MediaRecorder(stream, {
                    mimeType: mine
                })
                let chunks = [];
                mediaRecoder.addEventListener('dataavailable', function (e) {
                    chunks.push(e.data)
                })
                mediaRecoder.addEventListener('stop', function () {
                    let blob = new Blob(chunks, {
                        type: chunks[0].type
                    })
                    let url = URL.createObjectURL(blob);
                    let video = document.querySelector(".video");
                    video.src = url;

                    let a = document.createElement('a')
                    a.href = url
                    a.download = 'video.webm'
                    a.click()
                })
                mediaRecoder.start()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~element-plus/dist/index.css";
</style>

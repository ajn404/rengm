import { ElLoading } from "element-plus";

//判断元素是否滑动到可视区
export const isElementNotInViewport = (el) => {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
    rect.bottom <= 0
  );
};

const doc = document;
const html = doc.documentElement;
export const enterFullScreen = () => {
  const enter =
    html.requestFullscreen ||
    html.webkitRequestFullScreen ||
    html.mozRequestFullScreen ||
    html.msRequestFullscreen;
  enter && enter.call(html);
};

export const exitFullScreen = () => {
  const exit =
    doc.exitFullscreen ||
    doc.webkitCancelFullScreen ||
    doc.mozCancelFullScreen ||
    doc.msExitFullscreen;
  exit && exit.call(doc);
};

//定义el-loading加载样式
export const loading = () => {
  return ElLoading.service({
    lock: true,
    text: "加载中",
    fullscreen: true,
    background: "rgba(0, 0, 0, 0.7)",
  });
};

export const screenRecord = async () => {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const mine = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";
  let mediaRecoder = new MediaRecorder(stream, {
    mimeType: mine,
  });
  let chunks = [];
  mediaRecoder.addEventListener("dataavailable", function (e) {
    chunks.push(e.data);
  });
  mediaRecoder.addEventListener("stop", function () {
    let blob = new Blob(chunks, {
      type: chunks[0].type,
    });
    let url = URL.createObjectURL(blob);
    // let video = document.querySelector(".video");
    // video.src = url;

    let a = document.createElement("a");
    a.href = url;
    a.download = "video.webm";
    a.click();
  });
  mediaRecoder.start();
};

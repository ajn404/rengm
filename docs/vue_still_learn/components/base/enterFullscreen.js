const doc = document;
const html = doc.documentElement;

const enter =
    html.requestFullscreen ||
    html.webkitRequestFullScreen ||
    html.mozRequestFullScreen ||
    html.msRequestFullscreen;

const exit =
    doc.exitFullscreen ||
    doc.webkitCancelFullScreen ||
    doc.mozCancelFullScreen ||
    doc.msExitFullscreen;

const enterFullScreen = () => {
    enter && enter.call(html);
};

const exitFullScreen = () => {
    exit && exit.call(doc);
};

export { enterFullScreen, exitFullScreen };

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







//判断元素是否滑动到可视区
export const isElementNotInViewport = (el)=> {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
      rect.bottom <= 0
    );
  };
  
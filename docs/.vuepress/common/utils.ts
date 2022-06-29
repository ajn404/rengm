export const isElementNotInViewport = (el)=> {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
      rect.bottom <= 0
    );
  };
  
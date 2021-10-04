export const debounce = (fn, delay = 0) => {
  let timerId;

  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn.apply(this, arguments);
      timerId = null;
    }, delay);
  };
};

export const debounce = (fn, delay = 0) => {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

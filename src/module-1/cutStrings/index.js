export const cutStrings = (arr = []) => {
  const minLen = Math.min(...arr.map((w) => w.length));

  return arr.map((word) => word.slice(0, minLen));
};

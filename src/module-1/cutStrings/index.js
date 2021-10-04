export const cutStrings = (arr = []) => {
  const lengths = arr.map((word) => word.length);
  const minLen = Math.min(...lengths);

  return arr.map((word) => word.slice(0, minLen));
};

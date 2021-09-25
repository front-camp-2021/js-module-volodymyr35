const weirdifyWord = (w) =>
  w.slice(0, w.length - 1) + w[w.length - 1]?.toLowerCase();

export const weirdString = (str = "") => {
  if (!str) return str;

  const normalizedString = str.toUpperCase();

  return normalizedString.split(" ").map(weirdifyWord).join(" ");
};

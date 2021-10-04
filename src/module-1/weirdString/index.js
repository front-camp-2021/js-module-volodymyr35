const weirdifyWord = (word) =>
  word.slice(0, word.length - 1) + word[word.length - 1]?.toLowerCase();

export const weirdString = (str = "") => {
  if (!str) return str;

  const normalizedString = str.toUpperCase();

  return normalizedString.split(" ").map(weirdifyWord).join(" ");
};

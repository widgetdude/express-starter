const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const chunkArray = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
};
const sortArrayOfObjectsByKey = (array, key) => {
  return [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

const matches = (text, regex) => [...text.matchAll(regex)].map(([match]) => match);

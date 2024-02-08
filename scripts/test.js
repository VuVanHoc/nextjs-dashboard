const { log } = require('console');

const num = [1, 2, 3, 4, 5, 6, 7];
num.forEach((n) => {
  if (n % 2 === 0) return;
  console.log(n);
});

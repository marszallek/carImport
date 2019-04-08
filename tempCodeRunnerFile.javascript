const getRate = (start, stop, step) => new Array(stop / start).fill(start).map((n, i) => (n + i) + step);

console.log(getRate(1, 11, 2))
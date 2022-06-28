function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new Error;
  }
    return (number % 2 !== 0);

}

function myRange(min, max, step = 1) {
  // Your code here
  let range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}


module.exports = { isFive, isOdd, myRange };

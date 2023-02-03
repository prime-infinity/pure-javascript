const twoSumLessThanK = function (A, K) {
  A.sort((a, b) => a - b);
  let l = 0;
  let r = A.length - 1;
  let maxSum = -1;

  while (l < r) {
    let sum = A[l] + A[r];
    if (sum >= K) {
      r--;
    } else {
      maxSum = Math.max(maxSum, sum);
      l++;
    }
  }

  return maxSum;
};

let A = [34, 23, 1, 24, 75, 33, 54, 8];
let K = 60;

console.log(twoSumLessThanK(A, K));

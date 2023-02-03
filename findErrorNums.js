const findErrorNums = function (nums) {
  let res = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      res[0] = nums[i];
    } else {
      set.add(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      res[1] = i;
      break;
    }
  }

  return res;
};

let numss = [1, 2, 3, 4, 3];
console.log(findErrorNums(numss));

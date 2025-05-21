const nums = [4, 5, 9, 11];
const target = 9;

const numLength = nums.length;

for (let i = 0; i < numLength - 1; i++) {
  for (let j = i + 1; j < numLength; j++) {
    let sum = nums[i] + nums[j];
    console.log("sum : " + sum);
    if (sum === target) {
      console.log("find the target");
    } else {
      console.log("cannot find the taget");
    }
  }
}

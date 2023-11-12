const roman = [
  ["M", ""],
  ["C", "D", "M", ""],
  ["X", "L", "C", ""],
  ["I", "V", "X", ""]
];
const cast = [[-1], [0], [0,0], [0,0,0], [0,1], [1], [1,0], [1,0,0], [1,0,0,0], [0,2]];

function convertToRoman(num) {
  num = String(num).padStart(4, "0");
  let ans = [];
  for (let i = 0; i < num.length; i++) {
    const n = parseInt(num[i]);
    for (let j = 0; j < cast[n].length; j++) {
      ans.push(roman[i][cast[n][j]]);
    }
  }
  return ans.join("");
}

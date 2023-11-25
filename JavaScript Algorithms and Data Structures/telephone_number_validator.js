const numbers = Array.from("0123456789");
function telephoneCheck(str) {
  let a = "[(]?[- ]?[0-9]{3}[)]?";
  let b = "[- ]?[0-9]{3}";
  let c = "[- ]?[0-9]{4}";
  let re = new RegExp(a+b+c);
  let re_check = re.test(str);
  let brackets_check = str.split("(").length === str.split(")").length;
  let nums = Array.from(str).filter(v => numbers.includes(v));
  let length_check = nums.length === 10 || (nums.length === 11 && nums[0] === "1")
  let start_check = !(str[0] === "-" || str[str.length - 1] === ")")
  return Array(start_check, re_check, brackets_check, length_check).every(Boolean);
}

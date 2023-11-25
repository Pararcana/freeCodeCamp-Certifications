function telephoneCheck(str) {
  let re_check = /[(]?[- ]?\d{3}[)]?[- ]?\d{3}[- ]?\d{4}/.test(str);
  let brackets_check = str.split("(").length === str.split(")").length;
  let start_check = !(str[0] === "-" || str[str.length-1] === ")")
  str = Array.from(str).filter(v => Array.from("0123456789").includes(v));
  let length_check = str.length === 10 || (str.length === 11 && str[0] === "1")
  return Array(start_check, re_check, brackets_check, length_check).every(Boolean);
}

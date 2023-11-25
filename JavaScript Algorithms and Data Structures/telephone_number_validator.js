function telephoneCheck(str) {
  let re_check = /^1?\s?[(]?[- ]?\d{3}[)]?[- ]?\d{3}[- ]?\d{4}(?![)])/.test(str);
  let brackets_check = str.split("(").length === str.split(")").length;
  str = Array.from(str).filter(v => Array.from("0123456789").includes(v));
  let length_check = str.length === 10 || (str.length === 11 && str[0] === "1");
  return Array(re_check, brackets_check, length_check).every(Boolean);
}

const acceptable_chars = Array.from("0123456789-( )");
const dashes_only = Array.from("0123456789-");
const numbers = Array.from("0123456789");

function telephoneCheck(str) {  
  let open = str.split("").findIndex(v => v === ")")
  let closed = str.split("").findIndex(v => v === "(")
  let brackets_check = str.split("(").length === str.split(")").length;
  brackets_check = (open - closed == 4 && brackets_check) || (open == -1 && closed == -1);
  let chars_check = str.split("").every(v => acceptable_chars.includes(v)); 
  let dash_check = Array.from(str).filter(v => dashes_only.includes(v));
  dash_check = dash_check.join("").split("-")
  if (dash_check.length === 2) {
    dash_check = dash_check[1].length == 4;
  } else if (dash_check.length === 3) {
    dash_check = dash_check[1].length == 3 && dash_check[2].length == 4;
  } else if (dash_check.length !== 1) {
    dash_check = false;
  }

  str = Array.from(str).filter(v => numbers.includes(v));
  let length_check = str.length === 10 || (str.length === 11 && str[0] === "1")
  return Array(length_check, chars_check, brackets_check, dash_check).every(Boolean)
}

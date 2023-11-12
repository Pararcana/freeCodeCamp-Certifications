const acceptable_chars = Array.from("0123456789-( )");
const dashes_only = Array.from("0123456789-");
const numbers = Array.from("0123456789");

function telephoneCheck(str) {
  let brackets_check = str.split("(").length === str.split(")").length
  let chars_check = str.split("").every(v => acceptable_chars.includes(v));
  
  let open = str.split("").findIndex(function(v) {return v==")"})
  let closed = str.split("").findIndex(function(v) {return v=="("})
  let brackets_check2 = open - closed == 4 || (open == -1 && closed == -1);
  
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
  let length_check = false
  if (str.length === 10) {
    length_check = true;
  } else if (str.length === 11) {
    if (str[0] === "1") {
      length_check = true;
    }
  }
  return Array(length_check, chars_check, brackets_check, dash_check, brackets_check2).every(Boolean)
}

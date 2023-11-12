const acceptable_chars = Array.from("0123456789-( )");
const dashes_only = Array.from("0123456789-");
const numbers = Array.from("0123456789");

function open(v) {
  return v == ")"
}

function close(v) {
  return v == "("
}

function telephoneCheck(str) {
  let brackets_check = str.split("(").length === str.split(")").length
  let chars_check = str.split("").every(v => acceptable_chars.includes(v));
  
  let open_brackets = str.split("").findIndex(open)
  let closed_brackets = str.split("").findIndex(close)
  let brackets_check2 = open_brackets - closed_brackets == 4 || (open_brackets == -1 && closed_brackets == -1);
  
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

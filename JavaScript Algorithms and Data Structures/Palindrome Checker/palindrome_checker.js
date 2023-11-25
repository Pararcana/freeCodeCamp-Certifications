const alphanumeric = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

function palindrome(str) {
  str = Array.from(str.toUpperCase());
  str = str.filter(v => alphanumeric.includes(v));
  return str.join("") === str.reverse().join("");
}

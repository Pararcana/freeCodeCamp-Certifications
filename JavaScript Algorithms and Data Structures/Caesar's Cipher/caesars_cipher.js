function rot13(str) {
  let ciphertext = str.toUpperCase();
  let plaintext = [];

  for (let char of ciphertext) {
    if (65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90) {
      let newChar = char.charCodeAt(0) - 13;
      plaintext.push(String.fromCharCode(newChar < 65 ? newChar + 26 : newChar));
    } else {
      plaintext.push(char);
    }
  }
  return plaintext.join("");
}

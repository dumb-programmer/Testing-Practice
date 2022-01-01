const caesarCipher = (function () {
  function getNewChar(offset) {
    return "abcdefghijklmnopqrstuvwxyz".charAt(offset);
  }

  function getIndex(char) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(char);
  }

  function isLetter(char) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(char) !== -1;
  }

  function encrypt(text, key) {
    let encrypted_text = "";
    text = text.toLowerCase();
    for (let char of text) {
      if (isLetter(char)) {
        encrypted_text += getNewChar((getIndex(char) + key) % 26);
      } else {
        encrypted_text += char;
      }
    }
    return encrypted_text;
  }

  function decrypt(text, key) {
    let decrypted_text = "";
    for (let char of text) {
      if (isLetter(char)) {
        decrypted_text += getNewChar((((getIndex(char) - key) % 26) + 26) % 26);
      } else {
        decrypted_text += char;
      }
    }
    return decrypted_text;
  }

  return { encrypt, decrypt };
})();

module.exports = caesarCipher;

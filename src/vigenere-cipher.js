const CustomError = require("../extensions/custom-error");


function filterKey(key) {
  let result = [];
  for (let i = 0; i < key.length; i++) {
    let c = key.charCodeAt(i);
    if (isLetter(c))
      result.push((c - 65) % 32);
  }
  return result;
}

// Tests whether the given character code is a Latin letter.
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

// Tests whether the given character code is an Latin uppercase letter.
function isUppercase(c) {
  return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

// Tests whether the given character code is a Latin lowercase letter.
function isLowercase(c) {
  return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}

class VigenereCipheringMachine {

  constructor(isReversed) {
    this.isReversed = isReversed;
  }

  /*
  * Returns the result the Vigenère encryption on the given text with the given key.
  */
  crypt(input, key) {
    if (input === 'undefined' || key === 'undefined') {
      throw Error('error arguments');
    }
    let output = "";
    for (let i = 0, j = 0; i < input.length; i++) {
      let c = input.charCodeAt(i);
      if (isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output;
  }

  encrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw Error('error arguments');
    }

    let keyArray = filterKey(key);

    if (this.isReversed === false) {
      return (this.crypt(message.split('').reverse().join(''), keyArray).toUpperCase());
    } else {
      return (this.crypt(message, keyArray).toUpperCase());
    }

  }

  decrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw Error('error arguments');
    }

    let keyArray = filterKey(key);

    for (let i = 0; i < keyArray.length; i++)
      keyArray[i] = (26 - keyArray[i]) % 26;

    if (this.isReversed === false) {
      return (this.crypt(message.split('').reverse().join(''), keyArray));
    } else {
      return (this.crypt(message, keyArray));
    }

  }

}

module.exports = VigenereCipheringMachine;

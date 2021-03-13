const CustomError = require("../extensions/custom-error");

/*
   * Returns the result the Vigenère encryption on the given text with the given key.
   */
function crypt(input, key) {
  var output = "";
  for (var i = 0, j = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
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

function filterKey(key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
    var c = key.charCodeAt(i);
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
   encrypt(message, key) {
    if (key.length === 0) {
      alert("Key is empty");
      return;
    }

    var keyArray = filterKey(key);
    if (keyArray.length === 0) {
      alert("Key has no letters");
      return;
    }

    return(crypt(message, keyArray).toUpperCase());
  }

   decrypt(message, key) {
    if (key.length === 0) {
      alert("Key is empty");
      return;
    }

    var keyArray = filterKey(key);
    if (keyArray.length === 0) {
      alert("Key has no letters");
      return;
    }

    for (var i = 0; i < keyArray.length; i++)
      keyArray[i] = (26 - keyArray[i]) % 26;

    return(crypt(message, keyArray));
  }

}

module.exports = VigenereCipheringMachine;

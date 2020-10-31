class VigenereCipheringMachine {
  constructor(type = true) {
    this.typeOfMachine = type;
    this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  returnResult(result) {
    if (this.typeOfMachine) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }

  checkArguments (message, key) {
    if (!message || !key) throw new Error();
    return true;
  }

  encrypt(message, key) {
    this.checkArguments(message, key);

    const messageLength = message.length;
    const stringToMatch = ''.padEnd(messageLength * 2, key).toUpperCase();
    const doubleAlphabet = this.alph + this.alph;
    const localMessage = message.toUpperCase();

    let result = '';
    let i = 0;
    let j = 0;

    while (i < messageLength) {
      const messageChar = localMessage[i];
      const secretChar = stringToMatch[j];

      if (!/[A-Z]/.test(messageChar)) {
        result += messageChar;
        i++;
      } else {

        const positionMessageChar = messageChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const positionSecretChar = secretChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const resultCharPosition = positionSecretChar + positionMessageChar;
        const resultChar = doubleAlphabet.charAt(resultCharPosition);

        result += resultChar;

        i++;
        j++;
      }
    }

    return this.returnResult(result);
  }


  decrypt(message, key) {
    this.checkArguments(message, key);

    const localMessage = message.toUpperCase();
    const messageLength = message.length;
    const stringToMatch = ''.padEnd(messageLength * 2, key).toUpperCase();
    const doubleAlphabet = this.alph + this.alph;

    let result = '';
    let i = 0;
    let j = 0;

    while (i < messageLength) {
      const secretChar = stringToMatch[j];
      const messageChar = localMessage[i];
      const positionSecretChar = doubleAlphabet.indexOf(secretChar);

      let positionMessageChar = 0;

      if (!/[A-Z]/.test(messageChar)) {
        result += messageChar;
        i++;
      } else {
        positionMessageChar = doubleAlphabet.indexOf(messageChar, positionSecretChar);
        const charResult = doubleAlphabet.charAt(positionMessageChar - positionSecretChar);

        result += charResult;

        i++;
        j++;
      }
    }

    return this.returnResult(result);
  }
}
module.exports = VigenereCipheringMachine;

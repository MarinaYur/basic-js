class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error ('Error');
        }        
       let eng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
       let messageLetters = message.toUpperCase().match(/[A-Z]/g);
       let messageUpper = message.toUpperCase();
       let keyRepeat = key.repeat(Math.ceil(messageLetters.length / key.length));
           keyRepeat = keyRepeat.toUpperCase().split('');
       let result = [];
        for (let i = 0; i < messageLetters.length; i++) {
           let indexKey = eng.indexOf(keyRepeat[i]);
           let indexMessageLetters = eng.indexOf(messageLetters[i]);
           let step = indexKey + indexMessageLetters;
            step = step >= 26 ? (step - 26) : step;
            result.push(eng[step]);

        }
        for (let l = 0; l < messageUpper.length; l ++) {
            if (!eng.includes(messageUpper[l])) {
            result.splice(l, 0, messageUpper[l]);
            }
        }
        if (!this.mode) {
            return result.reverse().join('');
        } else {
            return result.join('');
        }
        }

    decrypt(encryptedmessage, key) {
        if (!key || !encryptedmessage) {
            throw new Error ('Error');
        }
        let eng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let encryptedmessageArray = encryptedmessage.toUpperCase().match(/[A-Z]/g);
        let keyRepeat = key.repeat(Math.ceil(encryptedmessageArray.length/key.length));
        let keyRepeatArray = keyRepeat.toUpperCase().split('');
        let result = [];
        for (let i = 0; i < encryptedmessageArray.length; i ++) {
            let indexEncryptedmessage = eng.indexOf(encryptedmessageArray[i]);
            let indexKey = eng.indexOf(keyRepeatArray[i]);
            let step = indexEncryptedmessage - indexKey;
            step = step < 0 ? (step + 26) : step;
            result.push(eng[step]);
        }
        let encryptedmessageUpper = encryptedmessage.toUpperCase();
        for (let l = 0; l < encryptedmessageUpper.length; l ++) {
            if (!eng.includes(encryptedmessageUpper[l])) {
            result.splice(l, 0, encryptedmessageUpper[l]);
            }
        }
        if (!this.mode) {
            return result.reverse().join('');
        } else {
            return result.join('');
        }
    }
}
module.exports = VigenereCipheringMachine;
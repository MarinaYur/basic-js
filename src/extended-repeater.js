module.exports = function repeater(str, option) {
    if (typeof str !== 'string') {
        str = String(str);
    } 
    if (option.addition === false) {
        option.addition = String(option.addition);
    }
    if (option.addition === null) {
        option.addition = String(option.addition);
    } 
    let result = str;
    let strWithLongAddition = str + option.addition;
    let result1 = '';
    if (typeof option.repeatTimes !== 'number') {
        option.repeatTimes = 1;
    }
    if (typeof option.additionRepeatTimes !== 'number') {
        option.additionRepeatTimes = 1;
        }
    if (option.repeatTimes > 1) {
        if (option.addition && option.additionRepeatTimes > 1) {
            for (let j = 1; j < option.additionRepeatTimes; j ++) {
                strWithLongAddition += option.additionSeparator + option.addition;
                }
                result1 = strWithLongAddition;
            for (let i = 1; i < option.repeatTimes; i ++) {                
                result1 += option.separator + strWithLongAddition;
                }
                return result1;
        } else {

        for (let i = 1; i < option.repeatTimes; i ++) {
            if (option.addition && option.additionRepeatTimes === 1) {
                let strWithAddition = '';
                for (let i = 1; i < option.repeatTimes; i ++)
                {strWithAddition = str + option.addition;
                result1 += strWithAddition + option.separator;}
                    return result1 + strWithAddition;                
                } else if (option.separator) {
                result += option.separator + str;
            } else {
                result += '+' + str;
                }
        }
        }
    } else if (option.addition && option.additionRepeatTimes > 1) {
        for (let k = 1; k < option.additionRepeatTimes; k ++) {
            result += option.addition + option.additionSeparator;
        }
        return result + option.addition;
    } else if (option.addition) {
        return str + option.addition; 
    } 
    return result;
    // throw 'Not implemented';
  
    // remove line with error and write your code here
};

// module.exports = function repeater(str, option) {
//     let result = str;
//     let strWithLongAddition = str + option.addition;
//     let result1 = '';
//     if (typeof option.repeatTimes !== 'number') {
//         option.repeatTimes = 1;
//     }
//     if (typeof option.additionRepeatTimes !== 'number') {
//         option.additionRepeatTimes = 1;
//         }
//     if (option.repeatTimes > 1) {
//         if (option.addition && option.additionRepeatTimes > 1) {
//             for (let j = 1; j < option.additionRepeatTimes; j ++) {
//                 strWithLongAddition += option.additionSeparator + option.addition;
//                 }
//                 result1 = strWithLongAddition;
//             for (let i = 1; i < option.repeatTimes; i ++) {                
//                 result1 += option.separator + strWithLongAddition;
//                 }
//                 return result1;
//         } else {

//         for (let i = 1; i < option.repeatTimes; i ++) {
//             if (option.addition && option.additionRepeatTimes === 1) {
//                     let strWithAddition = str + option.addition;
//                     result = strWithAddition + option.separator + strWithAddition + option.separator + strWithAddition;
//                     strWithAddition = str;                
//                 } else if (option.separator) {
//                 result += option.separator + str;
//             } else {
//                 result += '+' + str;
//                 }
//         }
//         }
//     }   
//     else if (option.addition) {
//         return str + option.addition; 
//     } 
//     return result;
//     // throw 'Not implemented';
  
//     // remove line with error and write your code here
// };
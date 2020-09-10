module.exports = function transform(arr) {
    // let answer = [];
    let arrCopy = [];
    if (!(arr instanceof Array)) {
        throw new Error('Error')};    
    for(let i = 0; i < arr.length; i ++) {
        switch (arr[i]) {
            case '--discard-next': {
                i ++;            
            break;}
            case '--discard-prev': {
                if(arrCopy.length > 0) {
                    arrCopy.pop();
                    }
            break;}
            case '--double-next': {
                if (i < arr.length - 1)
                arrCopy.push(arr[i+1]);
            break;}
            case '--double-prev': {
                if(i > 0){
                    arrCopy.push(arr[i - 1]);
                }
            break;}
        default:
            arrCopy.push(arr[i]);
            }
        };    
    return arrCopy;
    }
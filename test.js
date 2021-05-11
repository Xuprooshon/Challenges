var randomNum = Math.floor(Math.random() * 100)
function strNumAndArr(num) {
    let varNum = num
    let stringNumber = varNum.toString();
    let digitsArray = [];
    for (let i = 0; i < stringNumber.length; i++) {
        digitsArray.push(stringNumber[i])
    }
    return digitsArray;
}
function squareElements(array) {
    let squaredArray = [];
    for (const element of array) {
        let pureNum = Number(element);
        squaredArray.push(pureNum * pureNum);
    }
    return squaredArray;
}
function strArr(array) {
    let strSquaredArray = [];
    for (const element of array) {
        let strElement = element.toString();
        strSquaredArray.push(strElement);
    }
    return strSquaredArray;
}
function fuseArr(array) {
    let finalStr = "";
    for (const element of array) {
        finalStr = finalStr + element;
    }
    let finalResult = Number(finalStr);
    return finalResult;
}
function finalFunction(num) {
    let strArr2 = strNumAndArr(num);
    let squaredDigits = squareElements(strArr2);
    let strArr3 = strArr(squaredDigits);
    let finalNum = fuseArr(strArr3);
    return finalNum;
}
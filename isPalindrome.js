var isPalindrome = function (x) {
    if (x < -1) return false;

    let numberArray = [];
    let current = x;
    while (current > 0) {
        let lastDigit = current % 10;
        current = Math.floor(current / 10);
        numberArray.push(lastDigit);
    }

    if (numberArray.length < 2) return false;

    const iterationsNum = Math.ceil(numberArray.length / 2); //1

    for (let i = 0; i < iterationsNum; i++) {
        let firstElement = numberArray[i]; // [1,0] > 1
        let lastElement = numberArray[numberArray.length - i - 1]; // 2 - 0 - 1 = 1 > [1,0] > 0

        if (firstElement !== lastElement) return false;
    }

    return true;
};

console.log(isPalindrome(0)); // true
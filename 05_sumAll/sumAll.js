const sumAll = function (num1, num2) {
    const Array = [];
    let sum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            Array.push(i);
        }

        for (let i = 0; i < Array.length; i++) {
            sum += Array[i];
        }
    }

    else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            Array.push(i);
        }

        for (let i = 0; i < Array.length; i++) {
            sum += Array[i];
        }

    }

    else {
        return "ERROR";
    }


    return sum;


};

// Do not edit below this line
module.exports = sumAll;

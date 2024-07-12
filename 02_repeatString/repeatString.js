const repeatString = function(string, num) {
    if (num >= 1) {
        return string.repeat(num);
    }
    else if (num == 0) {
        return "";
    }
    else {
        return "ERROR"
    }

    }


// Do not edit below this line
module.exports = repeatString;

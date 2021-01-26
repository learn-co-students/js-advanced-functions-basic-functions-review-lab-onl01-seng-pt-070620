function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

let wrapAdjective = function(param1="*") {
    return function(param2="special") {
        return `You are ${param1}${param2}${param1}!`
    }
};

const Calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

let actionApplyer = function(int, array) {

    for (let i = 0; i < array.length; i++) {
        int = array[i](int)
    }

    return int
};

function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(special = "*") {
    return function(string = "special") {
        return `You are ${special}${string}${special}!`
    }
}

const Calculator = { add: function add() {return 1 + 3}, subtract: function subtract() {return 1 - 3}, multiply: function multipy() {return 1 * 3}, divide: function divide() {return 10 / 5} }

function actionApplyer(startingNum, fnArray) {
    for (const fn of fnArray) {
        startingNum = fn(startingNum)
    }
    return startingNum
}
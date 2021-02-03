// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol="*"){
    return function(middle="special") {
        return `You are ${symbol}${middle}${symbol}!`
     }
}
const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

const actionApplyer = function(startInt, array) {
    for (let i = 0; i < array.length; i++ ){
        startInt = array[i](startInt)
      }
    return startInt
}
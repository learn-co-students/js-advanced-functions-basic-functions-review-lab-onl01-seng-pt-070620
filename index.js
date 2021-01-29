function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(param="*") {
    return function(adj="special") {
        return `You are ${param}${adj}${param}!`;
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    }
}

// function actionApplyer(int, numArray) {
//     if (numArray === []) {
//         return int;
//     } else {
//         let multiplied = Calculator.multiply(int, numArray[0]);
//         let added = Calculator.add(multiplied, numArray[1]);
//         return added % numArray[2]; 
//     }
// }

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
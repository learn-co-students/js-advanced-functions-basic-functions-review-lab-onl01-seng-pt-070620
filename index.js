function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

function mondayWork(task="go to the office") {
    return `This Monday, I will ${task}.`
}
mondayWork()

// solution 1 using fucntion expression & instantly
function wrapAdjective(flair="*") {
    return function(name="special") {
        return `You are ${flair}${name}${flair}!`
    }
}

// solution 2 using function declaration
// function wrapAdjective(flair="*") {
//     let innerFunction = function(name="special") {
//         return `You are ${flair}${name}${flair}`
//     }
//     return innerFunction
// }

// calculator
const Calculator = {
    add: function(num1, num2) { return num1 + num2 },
    subtract: function(num1, num2) { return num1 - num2 },
    multiply: function(num1, num2) { return num1 * num2 },
    divide: function(num1, num2) { return num1 / num2 }
};

function actionApplyer(int, arrayOfTransforms) {
    if (arrayOfTransforms === []) { return int}
    else
     for (let i = 0; i < arrayOfTransforms.length; i++) {
         int = arrayOfTransforms[i](int);
     }
     return int;
}
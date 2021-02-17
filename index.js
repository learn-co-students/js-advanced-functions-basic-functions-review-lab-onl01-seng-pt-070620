function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(sign = "*"){
    return function(adj = "special"){
        return `You are ${sign}${adj}${sign}!`;
    }
}

let Calculator = {
    add : function(num1, num2){
        return num1 + num2;
    },
    subtract : function(num1, num2) {
        return num1 - num2;
    },
    multiply : function(num1, num2) {
        return num1 * num2;
    },
    divide : function(num1, num2) {
        return num1 / num2;
    }
};

function actionApplyer(start, functions) {
    if (functions === []){
        return start;
    }
    else{
        for (const fn of functions){
            start = fn(start);
        }
        return start;
    }
}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

  console.log(actionApplyer(13, arrayOfTransforms));

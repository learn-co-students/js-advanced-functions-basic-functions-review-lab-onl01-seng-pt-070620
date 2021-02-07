// Your code here
function saturdayFun(activity='roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

let mondayWork = function(activity="go to the office"){
    return (`This Monday, I will ${activity}.`);
}
mondayWork();

let wrapAdjective = function(style= "*"){
    return function(attribute= "special"){
        return (`You are ${style}${attribute}${style}!`);
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

function actionApplyer (start, functions){
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
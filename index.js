// Your code here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*"){
    return function(adj="special"){
        return `You are ${style}${adj}${style}!`
    }
}

let Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

function actionApplyer(startingInteger, arrayOfFunctions){
    let a = startingInteger
    for(let i = 0; i < arrayOfFunctions.length; i++){
        a = arrayOfFunctions[i](a)
    }
    return a
}

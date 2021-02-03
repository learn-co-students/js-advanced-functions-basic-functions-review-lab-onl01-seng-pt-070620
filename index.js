function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// function mondayWork(activity="go to the office") {
//     return `This Monday, I will ${activity}.`
// }

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(flair="*") {
         return function(adj='special') {
            return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(a=1, b=3) {
    return a + b
    },
    subtract: function(a=1, b=3) {
        return a - b
    },
    multiply: function(a=1, b=3) {
        return a * b
    },
    divide: function(a=10, b=5) {
        return a/b
    }
}

let actionApplyer = function(init, array) {
    let action = init
    for (let i = 0; i < array.length; i++){
        action = array[i](action)
    }
    return action
}








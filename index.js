// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = '*') {
  return function(param = 'special') {
    return `You are ${str}${param}${str}!`
  }
}

const Calculator = {
  add: function(a = 1, b = 2){return a + b},
  subtract: function(a=1,b=2){return a - b},
  multiply: function(a=1,b=2){return a * b},
  divide: function(a=10, b=5){return a / b}
}

function actionApplyer(init, arr) {
  let action = init
  for (let i = 0; i < arr.length; i++){
    action = arr[i](action)
}
return action
}

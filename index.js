function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork()

function wrapAdjective(star="*") {
    return function(adj="special"){
        return `You are ${star}${adj}${star}!`
    }
}
wrapAdjective()

const Calculator = {
    add: function(x, y) {
        return x + y
    },
    subtract: function(a, c) {
        return a - c 
    },
    multiply: function(d, b) {
        return d * b 
    },
    divide: function(j, k) {
        return j / k
    }
}

function actionApplyer(start, array) {
    let x = start

  for (let i = 0; i < array.length; i++ ){
    x = array[i](x)
  }

  return x
}
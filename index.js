function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}


let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol="*"){
    return function(adj="special"){
        return `You are ${symbol}${adj}${symbol}!`
    }

}

let Calculator = {add: function(x,y){return x+y}, subtract: function(x,y){return x-y},
multiply: function(x,y){return x*y}, divide: function(x,y){return x/y}}

let actionApplyer = function(int,arr){
    let start = int
    for(let i=0; i<arr.length; i++){
        start = arr[i](start)
    }
    return start
}
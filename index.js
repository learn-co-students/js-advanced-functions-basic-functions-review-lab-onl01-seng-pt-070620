// Your code here
function saturdayFun(action='roller-skate') {
    return `This Saturday, I want to ${action}!`;
  }
  let mondayWork = function(action='go to the office') {
    return `This Monday, I will ${action}.`
  }
  let wrapAdjective = function(special="*") {
    return function(adj="special"){
      return `You are ${special}${adj}${special}!`
    }
  }
  const Calculator = {
    add: function(){ return 1 + 3 },
    subtract: function(){ return 1 - 3 },
    multiply: function(){ return 1 * 3 },
    divide: function(){ return 10 / 5 }
  };
  let actionApplyer = function(base, arr){
    for(let fn of arr) {
      base = fn(base)
    }
    return base;
  }
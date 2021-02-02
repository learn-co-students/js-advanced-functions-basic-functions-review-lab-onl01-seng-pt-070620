// Your code here

function saturdayFun (activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

//saturdayFun is a declaration, () calls function after declaration, tho you can reference saturdayFun higher in the code and it will work, this is hoisting. "roller-skate" is acting as default arg.


function mondayWork (activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
  return function(sp="special"){
    return `You are ${flair}${sp}${flair}!`
  }
}

//above is an example of scope chain, allows functions within functions to access their parent scopes' variables. 

//wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

const Calculator = {add: function(){return 1 + 3}, 
subtract: function(){return 1 - 3}, multiply: function(){return 1 * 3},
divide: function(){return 10 / 5}
}

//above is an object saved as local variable, can return the functions as Calculator.divide, etc.


function actionApplyer(a, arr){
   for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }
  
  return a
}

//a is starting point argument, arr is an array, then we run a for loop
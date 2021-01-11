const saturdayFun = (arg = 'roller-skate') => {
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = (arg = 'go to the office') => {
    return `This Monday, I will ${arg}.`
}

const wrapAdjective = (flair = '*') => {
    return (innerParam = 'special') => {
        return (`You are ${flair}${innerParam}${flair}!`)
    }
}
const Calculator = {
    add: (a,b) => {return a+b},
    subtract: (a,b) => {return a-b},
    multiply: (a,b) => {return a*b},
    divide: (a,b) => {return a/b}
}

const actionApplyer = (int, array) => {
    let total = int

    for (let i = 0; i < array.length; i++ ){
        total = array[i](total)
    }
    return total
}
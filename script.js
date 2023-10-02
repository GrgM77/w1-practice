let number1=4
let number2=1000
let number3=7
let number4=8

function logger(sgt) {
    console.log(sgt)
}
logger(Math.floor)
functionmultipleFunc(number1, number2, number3, number4) {
    return number1 * number2 * number3 * number4
}
logger(functionmultipleFunc(number1, number2, number3, number4))



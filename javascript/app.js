console.log(add(2, 5))
function add(a,  b){
    return `${a} + ${b} = ${a+b}`
}
const sub = function(a, b){
    return `${a} - ${b} = ${a-b}`
}
console.log(sub(2, 5))
numbers = [1,2]
const isEven = function(x){
    console.log(x % 2 == 0)
}
numbers.forEach(isEven)
const mul = (a, b) => {
    return a * b
}
console.log(mul(2, 4))

const isGreaterThan10 = x => x > 10
console.log(isGreaterThan10(11))
console.log(isGreaterThan10(8))
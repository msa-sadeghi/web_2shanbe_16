// let score = 0
// score = score + 1
// console.log(score)
// score += 1
// console.log(score)
// score++
// console.log(score)

// console.log("123" === 123)

//   &&    ||    !



// let isLoggedIn = false
// isLoggedIn ? document.body.innerHTML = "<h1>Hello user</h1>" :
//             document.body.innerHTML = "<h1>Not Allowed</h1>"
// let  day = 1
// switch(day){
//     case 1:
//         console.log("mon")
//         break
//     case 2:
//         console.log("tue")
//         break

//     default:
//         console.log("blalalal")
// }
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }
// let j = 0
// while(j < 5){
//     console.log(j)
//     j++
// }
// let z = 1
// do{
//     console.log(z)
//     z++
// }
// while(z < 5)

let numbers = [1, 2, 3, 4, 5]
let s = 0
numbers.push(6)
for(let i = 0; i < numbers.length; i++){
    s += numbers[i]
}
console.log(s)

s = 0
numbers.forEach(function(n){
    s += n
})
console.log(s)

let fruits = ["apple", "banana", "grape"]
let res = "<ul>"
fruits.forEach(function(item){
    res += "<li>" + item + "</li>" 
})
res += "</ul>"
document.body.innerHTML =  res
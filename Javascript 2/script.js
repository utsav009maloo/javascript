// Arrow Functions

// 1.Syntax
// const add = () => { //Arrow functions
//     console.log("hello Utsav")
// }
// add()

// const sub = (a,b) => {
//     return a - b
// }
// console.log(sub(6 , 2))

//2.argument Keywords

const addnum = (...num) => {
console.log(num)
}
addnum(5,5,5,4,6,8)
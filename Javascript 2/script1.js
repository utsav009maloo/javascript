//Array
const work = ['Plumber','fireman','police','doctor']
// console.log(work)
// console.log(work.length)
// console.log(work[2])

// work.push('rony')
// console.log(work)

// work.pop('police')
// console.log(work)

// FOR EACH Function me you can make a functions and call them. make loop but not make new array
// function how(n){
//     console.log(n)
// }
// work.forEach(how)


//MAP functon it make new loop and also new array
// const num = [1,2,3,4,5,6,7,8]//Make array
// function double(n){//Make a function
//     return n * 2
// }
// let newnum = num.map(double)//create new array and call old array and call function
// console.log(newnum)//print new array

//Find function
const num = [1,2,3,4,5,6,7,8]
let ans = num.find((num) => num === 7)
console.log(ans)

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

function addnum(){
    let ans = 0
    for(let i = 0 ; i < arguments.length; i = i + 1){
        ans = ans + arguments[i]
    }
    return ans
    //console.log(arguments)
}

let result = addnum(10,20,50)
console.log(result)
// function add(a,b,c){
//     return (a+b+c);
// }
// let x = 20;
// let y = 20;
// console. log(add(x,y,30));

// let a = 10;

// function pack() {
//     let b = 20;
//     console.log(a+b);
// }
//   pack();

//
// let func = function() {
//     console.log('Utsav');
// }
// func();


// function multi(a ,b) {
//     console.log(a * b)
// }
// multi(5,10)

//UNLIMITED arrguments accepted

function add(){
    let ans = 0
    for(let i = 0; i < arguments.length; i = i + 1){
        ans = ans + arguments[0]   
    }
    return ans
    // console.log(arguments)
}

let result = add(50,30,40,50,60,70)
console.log(result)


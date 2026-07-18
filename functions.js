// function say() {
//     console.log("Hello Sir")
// }
// say()

// function sum(a,b){ // (a,b) are the parameters 
//     return(a+b)
//     //console.log(a+b) dont save in any other variable  
//     //also after return any of console or operation dosnt counted 
// }

// const result = sum(1,6)
// console.log(result);

// function userloginmsg(name){
//     if (name == undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${name} just logged in`
// }
// console.log(userloginmsg())

const user = {
    username: "user",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
    // username:"user2",
    // price: 233
// })

const newArry = [200,400,100,600]
function returnsec(getArray){
    return getArray[i]
}
console.log(newArry);
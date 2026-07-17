// const mySmbol = Symbol("mykey")
// const jsuser = {
//     name: "Kuldeep",
//     [mySmbol]: "mykeh",
//     age: 19,
//     location: "Indore",
//     isLoggedIn: false
// }
// console.log(jsuser[mySmbol]);
// console.log(typeof jsuser[mySmbol]);
// console.log(jsuser)

// Object.freeze(jsuser)
// // dosnt commit the changes after this the js user remains same 

// const tinderUser = {}

// tinderUser.id ="ad01"
// console.log(tinderUser)

// const regularUser ={
//     email: "some@gmail.in",
//     fullname: {
//         username: {
//             firstname: "ad",
//             lastname: "singh"
//         }
//     }
// }
// console.log(regularUser.fullname.username.firstname);


const obj1 ={1:"a",2:"b"}
const obj2 ={1:"a",2:"b"}
// const obj3 = Object.assign({}, obj1, obj2)
// use ... instead of this also called spread method 
const obj3 ={...obj1,...obj2}

console.log(obj3);
// users[1].email to access users via index like id =1,2,4,4,5,
// console.log(Object.keys,values,entries) ()


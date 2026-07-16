const mySmbol = Symbol("mykey")
const jsuser = {
    name: "Kuldeep",
    [mySmbol]: "mykeh",
    age: 19,
    location: "Indore",
    isLoggedIn: false
}
console.log(jsuser[mySmbol]);
console.log(typeof jsuser[mySmbol]);
console.log(jsuser)

Object.freeze(jsuser)
// dosnt commit the changes after this the js user remains same 
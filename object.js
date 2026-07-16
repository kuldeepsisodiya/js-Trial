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
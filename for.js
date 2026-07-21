// for in loop
const none = {
    js: "javascript",
    cpp: "c++"
}
for (const key in none) {
    // console.log(key, ':-' ,none[key])
}
const arr = ["js","wdas", "no2"]
for (const key in arr) {
    // console.log(arr[key]);
}
const map = new Map()
map.set(`In`,"India")
map.set(`Usa`,"United States")
for (const key in map) {
    console.log(key);
}
// bcz maps are non itrateable 


// for each loop

const coding = ["js","python","java"]
coding.forEach( function (d) {
    // console.log(d);
    //basic
})
//call back ( without name or non named function) 

//arrow funciton
coding.forEach( (item) => {
    // console.log(item);
    
} )

function print (item){
    console.log(item)
}
// coding.forEach(print)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})

let n1 = ["java","dlang","debug"]
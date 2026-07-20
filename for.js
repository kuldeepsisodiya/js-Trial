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
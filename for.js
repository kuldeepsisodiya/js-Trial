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
    // console.log(item)
}
// coding.forEach(print)

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
    
})

let n1 = ["java","dlang","debug"]

const values = n1.forEach( (item) => {
    return item
    } )

// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter
// const newNums = myNums.filter((nums) => nums > 4) 
// if we use { } we have to write return or if we use () it directly returns the value

// console.log(newNums)

// const newNums = []

// myNums.forEach( (num) => {
    // if (nums>4) {
    //     newNums.push(num)
    // }
// } )
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
    // return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // its input is the output of upper condition
                .filter( (num) => num >= 40)

// console.log(newNums);

const myNums = [1,2,3]
//in reduce method we have 
// const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10
const Total = myNums.reduce((acc, cur) => {
    console.log(`acc: ${acc} and currval: ${cur}`);
    return acc + cur
}, 0)
// console.log(Total);



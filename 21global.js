var c = 300
if (true){
    let a = 10
    const b = 30
    c = 40 //or var c =40
}
console.log(c);
//var or direct varible in any condition overides the orignal value of the varible var c=or c=
//thats why we avoid var and direct variable define 

// for (let i =0;i<array.length;i++){
//     const element = array[i];
// }

function one(){
    const username ="none"
    function two (){
        var website = "undefined"
        console.log(username);
    }
    //  console.log(website); reference error due to undefined 
    // two()
}
// one()

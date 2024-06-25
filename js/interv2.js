//set interval and set time out 
//set interval thoda thoda time kai k run karva mate

let a = setTimeout(() => {
    console.log("this is settime out")
}, 3000);
console.log(a)
// let b = confirm();
// if(b == "yes"){
//     return a();
// }
// else
//     clearTimeout(a)

//setinterval

let c = setInterval(()=>{
    console.log("this is setinterval")
},5000)

clearInterval(c)


//callback & callback hell
// 1 action pachi 2 ju action pachi 3 aene callback kevay aene sol karva callback hell vapray

//promise
let p = new promise((resolve,reject)=>{
    resolve(147);
})

p.then((value)=>{
    console.log(value)
})

p.catch((error)=>{
    console.log("some error are there")

})


//async await function





// try and catch

try{

}
catch(error){
    console.log(error)
}

//api

let x = fetch("link of api")
x.then((value1)=>{
    return value1.json();
})
x.then((value)=>{
    return value;
})
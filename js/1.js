let a = 10;
a = 20;
// let a = 30;
console.log(a);

// nn bb ss u 
// null number Boolean bigInt string symbol undefined 
// typeof a 

const a1 = {
    name : "sp",    
    roll : 1
}

console.log(a1);
// a1['name']="ssp";
a1.name="svp";
console.log(a1)

console.log(a1.name);
// const hoy toy object ni andar ni value change kari sake


//arithmetic operator 
// + - * / ** %  ++ -- 

var b = 10;
console.log(b)
b++
console.log("b++", b)
++b
console.log("++b",b)
b--
console.log("b--",b)
--b
console.log("--b",b)

//asingment operator
// = += -= *= /= %= **= 

//comparision operator
// == === != !== > < >= <= ?

// logical opoerators
// && || !

//prompt and alert

// let c = prompt("what's your age");
// c = Number.parseInt(c); this is converting string to number
// if(c>=18){
//     console.log("you can vate");
// }
// else{
//     console.log("you cannot vate");
// }



// ternry operator
// age>18?"vote":"cannot vate";


//swithch case
// let c = prompt("what's your age")
// switch(age){
//     case '1':    
//         console.log("1");
//         break;
//     case '2':
//         console.log("1");
//         break;
//     case '3':
//         console.log("1");
//         break;
//     case '4':
//         console.log("1");
//         break;
//     default:
//         console.log("default");
// }


//loopes
// for  for in   for of  while  do while

//for in loop
let obj = {
    shashank:123,
    harsh:234,
    dhruv:345
}
for (let a in obj){
    console.log(a + "  " + obj[a])
}
// a che e key ne access kare obj[a] thi key ni value aave

//for of loop for array or string not onject bu for in loop also use array and onject

//while and do while loop
let i=0;
let n=5;
while(i<n){
    console.log(i);
    i++;
}

//dowhiel
do{
    console.log(i)
    i++;
}while(i<n)


//fnctions

function functionName(perameter1, perameter2){
    return (perameter1+perameter2)
}

const hello = () => {
   console.log("hellow") 
}
hello();

const sum = (x,y) => {
    return (x+y)
}
console.log(sum(1,2))

//while fction
// let cn = 43;
// let i;
// while(i != 43){
//     i = prompt("enter a same number")
//     if(i=cn){
//         console.log("wow")
//     }
//     else{
//         console.log("enter a correct number")
//     }
// }
// console.log("correct")


//string

let z = "shashank";
console.log(z.length);
// console.log(z.[0])


// templates litrels
// string interpluation is template littrels

let p = "shashank";
let o = "harsh";

console.log(`${p} is brother of ${o}`);

// escape seqvence characters
//  let a = 'shashank\'s'
// otput = shashank's
// \t for tab
// \n for new line


// strings methods 
let s = "shashank";
console.log(s);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.slice(0,3));
console.log(s.repeat())
console.log(s.replace())
console.log(s.replaceAll())
console.log(s.indexOf())
console.log(s.lastIndexOf())
console.log(s.search())
// console.log(s.spl(0,1,p));
console.log(s.replace("s","p"))
let d = "parmar";
console.log(s.concat(" "+d))
console.log(s.trim()) // for remove space
//indexof
for (i=0; i<s.length; i++){
    console.log(s[i]);
}

let str1 = "please give me rs 1000";
const rs = console.log(Number.parseInt(str1.slice(17)))
console.log(typeof rs)

console.log(typeof str1)


//Array

let sp = [1,2,34];
console.log(sp[1])
sp[0]=147;//update
sp[3]=21;//add new value
console.log(sp)

for(i of sp){
    console.log(i)
}

//array methods
// push pop shift unshift join to string delete concat sort splice slice
let bb = sp.toString();
console.log( typeof bb)

let cc = sp.join("-")
console.log(cc)

let arry = [1,2,3,4,5,6]
let pop = arry.pop()
console.log(arry)
let push = arry.push(89)
console.log(arry)
let shift = arry.shift(22)
console.log(arry)

let unshift = arry.unshift();
console.log(arry)

let arry2 = [9,8,7,6,5,4,3,2,1]
let con = arry.concat(arry2)
console.log(con)

let sort = arry2.sort();
console.log(sort)        // arry ne modify kri nakhe

console.log(arry2)

//for assending order sorting
const comper = (a,b)=>{
    return a-b;
}

//for dessending order sorting
const compere = (a,b)=>{
    return b-a;
}

let num = [3,4,2,3,23,23,2,3244]
let spli = num.splice(1,5,88,89);
console.log(spli);


//looping for array
let arry3 = [2,2,34,5,6,7,1]
arry3.forEach((Element)=>{
    console.log(Element+1)
})


//dom nu html collection hoy to aene arry ma convert karvu pade etle aema foreach ni jgyaye  array from vpray
// Array.from(htmlcollectionname)

//for in or for of loop

//map filter & reduce

//map is create new array but foreach not create new array
// let mp = [22,1,33]
// let mmp = mp.map((value,index,array)=>{
//     console.log(value + 1000 , index,array);
// })

// //filter
// let fil = mp.filter((a)=>{
//     return a>10;
// })
// console.log(fil)


// //reduce 
// let red = [1,4,7,2,4,4]
// let newred = red.reduce((s,p)=>{
//     return s + p;
// })
// console.log(newred);

//console method
// .log .alert .warn .asset .table .clear .info .time .timeEnd
//console.table(obj)

// alert prompt confirm



// DOM BOM 

//documentgetElementById
//documentgetElementByClassName
//documentgetQureySelector
//innerText
//innerHtml

//child element


//
// let change = document.getElementsByClassName("className")
// change.style.color = "red"

// document.querySelector(".classname")
// document.querySelector("#IdName")
// document.querySelectorAll(".classname")
//element.mathches(css)
//element.closest(Classnanme)
//element.contain(elemnt)

// document.getElementsByTagName("h1")[0].firstElementChild.style.color = "red"


//array method y badhe vapray pn array.from lagavu pade

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//     element.style.color = "red"
// })

// let fore = document.getElementsByTagName("li");
// Array.from(fore).forEach((element)=>{
//     element.style.color = "red"
// })


//match and math function
// let ren = Math.floor(Math.random() * 3);
// let result = match(user,cpu)
//  document.write(result);


//
// document.firstChild.nodeName()
// document.firstElementChild.nodeName()

//inner html
// first.innerHTML="<i>hi</i>";
// let data = document.getElementById("first");
// console.log(data.dataset);

// //insert in DOM

// let div = documment.createElement('div')
// div.innerHTML="hello";
// document.body.append(div);

// first.insertAdjecatHTML('afterbegin','<h1>hello</h1>')
// first.insertAdjecatHTML('afterbend','<h1>hello</h1>')

// first.remove();


//class className

// first.className = "span"

// first.classList
// first.classList.remove("span")
// first.classList.add("span")
// first.classList.toggle("span")


// //set timout setinterval

// setTimeout(()=>{
//     alert("hello");
// },4000)

// let int = setInterval(() => {
//     alert("helllo")
// }, 5000);

// clearInterval(int)



// let proo = setInterval(()=>{
//     alert("wow")
// },3000);

// let pro = prompt("do you see agin promt");

// if(pro == "n"){
//     clearInterval(proo)
// }

//events
//click contextMenu(right click) mousehover mouseout mousedown mouseup mousemove

//keydown keyup keypress

//focuse submit

//DOMcontantLoad

// let x = btn.addEventListner("click",function(e){
//     alert("wwow")
// })

// btn.removeEventListner("click",x)

// document.getElementById("google").addEventListener("click",function(){
//     window.location="https://google.com";
//     window.focus();
// })


//date
let aa = new Date();
console.log(aa)
let dd = aa.getDate();
let h = aa.getHours();
let m = aa.getMinutes();
let ss = aa.getSeconds();
console.log(dd,h,m,ss)

let up = setInterval(()=>{
    console.log(new Date())
},1000)

clearInterval(up)

//callback & callback hell 
//let call = alert("callback example")
//setTimeout(call,1000);//this call is callback

//callback hell
// pyramid of callback/DOOM nested callback

//promise
//promise is a solution of callback hell and it's a object 
//it contains resolve , reject, panding

let pro = new Promise((resolve,reject)=>{
    console.log("promise")
    // reject("done")
    // console.log(Promise)
})

//resolve mate promise.then((res)=>{....})
//reject mate promise.catch((rej)=>{....})

//aysnc await
//aysnc function always return a promise
//await game te fuction call kru hoy to e wait kare jya shudhi promise resolve  k reject no thay e excution roki de

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("it's api")
            resolve(200);
        },2000)
    });
}

async function data(){
    await api();
}


//ex2 
async function ssp(){
    let surat = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("40surat")
        },5000)
    });
    let delhi = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("50delhi")
        }, 2000);
    })

    let wethers = await surat
    let wetherd = await delhi

    console.log(wethers,wetherd)
}


// let print = ssp();
// conmsol .log(print)

//try & catch method

// try{
    //code
// }
// catch(err){
//     console.log(err);
// }

// in this concept can throw custom error and reffrence error

//finaly always run
// try{
    //code
// }
// catch(err){
    //err code
// }
// finally{
    //this statment always run
// }


//fetch api
// let ap = fetch(URL)

// let jso = ap.json();
// console.log(jso)



//object oriented programming

class form{
    constructor(){
        console.log("this is constructure")
    }
    submit(){
        console.log(this.name +" submited")
    }
    cancel(){
        console.log(this.name +" cancel")
    }
    fill(givenname){
        this.name=givenname;
    }
}

let shank = new form()
let hrsh = new form()
shank.fill("shashank")
hrsh.fill("harsh")

shank.submit();
hrsh.cancel();

//constructure
//constructure always first run when load a website


//inheritence
// class monkey extends animal  // animal is parent class
//monkey class ma animal ni badhi method to ho y j ane mokey ni y

//method overwridind
// super.methodname


//math object property
//floor random ceil round abs rendom max min sqrt pow sig 


//importence
// Variables (Let, Var,  Const)
// Strings
// Data Types
// Operators
// Templet Literals
// Equality Operators
// Conditions
// Loops
// Functions
// Array 
// Objects
// DOM (Document Object Model)
// Event Listener
// Callback
// Promises
// API
// This keyword
// Local Storage
// Destructuring
// Spread Operator
// Rest Parameter

//arrow function
//arrow function this keyword ne nested func ma call karavi sake


//date function
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()	    Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970
    
setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)

//Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):

window.open();
window.close();
window.location(url);
location.reload();
window.alert('helloji');


const sp = require('./second')
const os = require('os')
const path = require('path')
const fs = require('fs')
console.log('shashank',sp)

console.log(os.homedir())
console.log(os.type())
let a = path.extname(__filename);
console.log(a)

//readFileSync
fs.readFile('second.js','utf8',(err,data)=>{
    console.log(err,data)
})

console.log('helloji')


// fs.writeFile('second.js','ok',()=>{
//     console.log('okk')
// })

//commman js modul ecmascript modul   
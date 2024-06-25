const fs = require('fs')

fs.writeFileSync('text.txt','shashank is learn node js')

const t1 = performance.now();

fs.readFile('text.txt','utf-8',(err,txt)=>{
    console.log(txt)
})

const pr = fs.readFileSync('text.txt','utf-8')
console.log(pr)

const t2 = performance.now();
const t3 = t1-t2;

console.log(t3)

const fs = require('fs');
const {promisify} = require('util');
const readfile = promisify(fs.readFile)
//同步获取
// const data  = fs.readFileSync('./ss.js');
// console.log('data',data.toString());
// //异步方法
// const data1 = fs.readFile('./ss.js',(err,data)=>{
//         if(err) throw err
//         console.log(data.toString())
// })
process.nextTick(async()=>{
    let data = await readfile('./ss.js');
        console.log('data11:'+data)
    }
)
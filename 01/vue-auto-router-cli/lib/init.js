const {promisify} = require('util');
const figlet = promisify(require('figlet'));  //输出一些特殊的文字
const chalk = require('chalk');//可以把日志改变颜色 
const clear = require('clear'); //清空命令行
const log = content =>console.log(chalk.green(content))
const {clone} = require('./download.js')
module.exports = async name=>{
    clear()
    const data = await figlet('Raonecloud')
    log(data)
    await clone('github:su37josephxia/vue-template',name)
}
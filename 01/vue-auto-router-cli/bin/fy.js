#!/usr/bin/env node
const program = require('commander')  //这个要安装
program.version(require('../package').version)
program
    .command('init <name>')
    .description('init project')
     .action(require('../lib/init'))
    // .action(name=>{
    //     console.log('[init111] '+name);
        
    // })
    
program.parse(process.argv)    

//cnpm i commander download-git-repo ora handlebars figlet clear chalk open  -s
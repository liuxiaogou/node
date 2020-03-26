#!/usr/bin/env node
const program = require('commander')
program.version(require('../package').version)
program
    .command('init <name>')
    .description('init project')
    .action(name=>{
        console.log('init '+name);
        
    })
program.parse(process.argv)    

//cnpm i commander download-git-repo ora handlebars figlet clear chalk open  -s
#!/usr/bin/env node

const { program } = require('commander');

function interpret(code) {
    console.log(code);
}

program
    .command('print <code>')
    .description('Run the CLI language code')
    .action((code) => {
        interpret(code);
    });

program.parse(process.argv);

#! /usr/bin/env node
const { program } = require('commander')
const save = require('./commands/save')
const display = require('./commands/display');
const update = require('./commands/update');



program
    .command('save')
    .description('Save usernames and data balances in the database')
    .option('-f, --file <file path>', 'Path to file that has the usernames and passwords eg: /path/folder/credentials.txt')
    .action(save)


program
    .command('update')
    .description('Update data balances in the database')
    .option('-f, --file <file path>', 'Path to file that has the usernames and passwords eg: /path/folder/credentials.txt')
    .action(update)

    
program
    .command('display')
    .description('Display usernames and data balances in command line')
    .option('--has-data', 'Display ONLY usernames that STILL have data')
    .option('--empty', 'Display ONLY usernames that DON\'T have data')
    .option('--invalid', 'Display ONLY usernames that are INVALID')
    .action(display)
    
    


program.parse(process.argv);


module.exports = program.opts();
#! /usr/bin/env node
const { program } = require('commander')
const save = require('./commands/save')
const display = require('./commands/display');
const update = require('./commands/update');



program
    .name('data-store')
    .usage('[command] [options]')
    .addHelpText('after', `
Example Call:
    $ data-store save --> save usernames and data balances with input via the command line

    $ data-store save -f '/The/Path/to/File/' --> save usernames and data balances with input from a file

    $ data-store display --has-data --> Display only usernames that HAVE data

    `)
    .command('save')
    .description('Save usernames and data balances in the database')
    .option('-f, --file <file path>', 'Path to file that has the usernames and passwords eg: \'C:\Users\me\Documents\credentials.txt\' ')
    .action(save)


program
    .command('update')
    .description('Update data balances in the database')
    .option('-f, --file <file path>', 'Path to file that has the usernames and passwords eg: \'C:\Users\me\Documents\credentials.txt\' ')
    .action(update)

    
program
    .command('display')
    .description('Display the usernames and data balances in command line table')
    .option('--has-data', 'Display ONLY usernames that STILL have data')
    .option('--empty', 'Display ONLY usernames that DON\'T have data')
    .option('--invalid', 'Display ONLY usernames that are INVALID')
    .action(display)
    

program.parse(process.argv);

module.exports = program.opts();
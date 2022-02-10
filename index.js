#! /usr/bin/env node
const { program } = require('commander')
const save = require('./commands/save')
const display = require('./commands/display');



program
    .command('save')
    .description('Save usernames and passwords in Mongo database')
    .action(save)


program
    .command('display')
    .description('Display usernames and data balances in command line')
    .action(display)






program.parse()
#! /usr/bin/env node
const { program } = require('commander')
const save = require('./commands/save')



program
    .command('save')
    .description('Save usernames and passwords in Mongo database')
    .action(save)







program.parse()
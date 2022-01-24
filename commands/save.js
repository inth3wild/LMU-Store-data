const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const axios = require('axios').default;
const encrypt = require('../modules/milk')


function save(params) {
    // let userNames = prompt('Enter username(s) seperated by comma(,): ').split(',');
    // let passwords = prompt('Enter password(s) seperated by comma(,): ').split(',');

    // console.log(userNames);

    let val = encrypt('data', 'key')
    console.log(val);

}



module.exports = save
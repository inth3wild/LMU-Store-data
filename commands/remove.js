const prompt = require('prompt-sync')();
const chalk = require('chalk')
const { displayTable } = require('../modules/displayTable');
const {removefromDB} = require('../database/db');



function remove() {
    let userNames = prompt('Enter a Username or list of Usernames seperated by comma(,): ').split(',');

    userNames.forEach((username, index) => {
        removefromDB(username);
    }); 
    console.log('\nFinished removing.');

    displayTable();
}

module.exports = remove;
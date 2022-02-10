const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const chalk = require('chalk')
const encryptData = require('../modules/encryptData');
const sendRequest = require('../modules/sendRequests');
const displayTable = require('../modules/displayTable');



function save(params) {
    // let userNames = prompt('Enter username(s) seperated by comma(,): ').split(',');
    // let passwords = prompt('Enter password(s) seperated by comma(,): ').split(',');

  

    if (userNames.length == passwords.length) {
        userNames.forEach((username, index) => {
            let password = passwords[index]

            // encrypt the username and password with emilk's algorithm
            let encryptedData = encryptData(username, password);

            // call sendRequest that checks data balance
            sendRequest(encryptedData, username);
        });
        
        // Display result cli table
        displayTable();

    } else {
        console.log(
            chalk.yellow.bold('\nPlease make sure the Number of elements in the username and password fields are the same \n')
        );
        save();
    }

}


module.exports = save;
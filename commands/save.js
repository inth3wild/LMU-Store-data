const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const chalk = require('chalk')
const encryptData = require('../modules/encryptData');
const sendRequest = require('../modules/sendRequests');



function save(params) {
    let userNames = prompt('Enter username(s) seperated by comma(,): ').split(',');
    let passwords = prompt('Enter password(s) seperated by comma(,): ').split(',');


    let credentialsArray = []

    if (userNames.length == passwords.length) {
        userNames.forEach((username, index) => {
            let password = passwords[index]

            // encrypt the username and password with emilk's algorithm
            let encryptedData = encryptData(username, password);

            credentialsArray.push({
                'username': username,
                'password': password,
                'encryptedData': encryptedData
            })

            // console.log(credentialsArray);
            console.log(encryptedData);
            sendRequest(encryptedData);
        });
    } else {
        console.log(
            chalk.yellow.bold('\nPlease make sure the Number of elements in the username and password fields are the same \n')
        );
        save();
    }

}



module.exports = save;
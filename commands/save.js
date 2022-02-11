const prompt = require('prompt-sync')();
const chalk = require('chalk')
const encryptData = require('../modules/encryptData');
const sendRequest = require('../modules/sendRequests');
const { displayTable } = require('../modules/displayTable');
const options = require('../index');
const fs = require('fs');
const readline = require('readline');
const path = require('path')



function save(options) {
    let allLinesArr = [];

    if (options.file) {
        credentialsFile = path.resolve(options.file);

        // Create stream of input file
        const rl = readline.createInterface({
            input: fs.createReadStream(credentialsFile),
            output: process.stdout,
            terminal:false
        })

        //   Process the stream
        rl.on('line', (line) => {
            let lineArr = line.split(' ');
            allLinesArr.push(lineArr);
            
            // encrypt the username and password with emilk's algorithm
            let encryptedData = encryptData(lineArr[0], lineArr[1]);

            // call sendRequest that checks data balance
            sendRequest(encryptedData, lineArr[0], {index: 1, length: 0});
        })

        rl.on('pause', () => {
            // console.log('\nDone! Reading file\n');
            allLinesArr.forEach((arr, index) =>{
                // encrypt the username and password with emilk's algorithm
                let encryptedData = encryptData(arr[0], arr[1]);

                // call sendRequest that checks data balance
                sendRequest(encryptedData, arr[0], {index: index + 1, length: allLinesArr.length}, displayTable);
            });
        })
    
    } 
    else {
        let userNames = prompt('Enter username(s) seperated by comma(,): ').split(',');
        let passwords = prompt('Enter password(s) seperated by comma(,): ').split(',');

        if (userNames.length == passwords.length) {
            userNames.forEach((username, index) => {
                let password = passwords[index]

                // encrypt the username and password with emilk's algorithm
                let encryptedData = encryptData(username, password);

                // call sendRequest that checks data balance
                sendRequest(encryptedData, username, {index: index + 1, length: userNames.length}, displayTable);
            });        
        } 
        else {
            console.log(
                chalk.yellow.bold('\nPlease make sure the Number of elements in the username and password fields are the same \n')
            );
            save();
        }
    }
}

module.exports = save;
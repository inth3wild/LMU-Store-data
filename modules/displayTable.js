const {readfromDB} = require('../database/db');
const Table = require('cli-table');
const chalk = require('chalk')


async function displayTable(params) {
    let dbData = readfromDB();
    let index = 0;

    // Instantiate command line table
    let table = new Table({
        head: [chalk.white('S/N'), chalk.white('Username'), chalk.white('Total Bandwidth'), chalk.white('Total Used'), chalk.white('Total Balance'), chalk.white('Last Checked')], 
    });


    for(let i in dbData){
        // Check if data is finished
        if (dbData[i].dataDigits[2].includes('-')) {
            table.push(
                [index+1, i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.red(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
            index ++;
        } 
        // Check if credentials are invalid
        else if (dbData[i].dataDigits == 'Invalid Username/Password'){
            table.push(
                [index+1, i, chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), dbData[i].lastChecked ]
            )
            index ++;
        }
            // Then person has data
        else {
            table.push(
                [index+1, i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.green(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
            index ++;
        }
        
    }

    console.log(table.toString());
}


function displayTableWithData(params) {
    let dbData = readfromDB();
    let index = 0;

    // Instantiate command line table
    let table = new Table({
        head: [chalk.white('S/N'), chalk.white('Username'), chalk.white('Total Bandwidth'), chalk.white('Total Used'), chalk.white('Total Balance'), chalk.white('Last Checked')], 
    });


    for(let i in dbData){
        // Check if data is finished
        if (dbData[i].dataDigits[2].includes('-')) {
            
        } 
        // Check if credentials are invalid
        else if (dbData[i].dataDigits == 'Invalid Username/Password'){
        }
        // Then person has data
        else {
            table.push(
                [index+1, i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.green(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
            index++;
        }
        
    }

    console.log(table.toString());
}


function displayTableWithoutData(params) {
    let dbData = readfromDB();
    let index = 0;

    // Instantiate command line table
    let table = new Table({
        head: [chalk.white('S/N'), chalk.white('Username'), chalk.white('Total Bandwidth'), chalk.white('Total Used'), chalk.white('Total Balance'), chalk.white('Last Checked')], 
    });


    for(let i in dbData){
        // Check if data is finished
        if (dbData[i].dataDigits[2].includes('-')) {
            table.push(
                [index+1, i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.red(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
            index++;
        } 
        // Check if credentials are invalid
        else if (dbData[i].dataDigits == 'Invalid Username/Password'){
        }
        // Then person has data
        else {
        }
        
    }

    console.log(table.toString());
}


function displayTableInvalid(params) {
    let dbData = readfromDB();
    let index = 0;

    // Instantiate command line table
    let table = new Table({
        head: [chalk.white('S/N'), chalk.white('Username'), chalk.white('Total Bandwidth'), chalk.white('Total Used'), chalk.white('Total Balance'), chalk.white('Last Checked')], 
    });


    for(let i in dbData){
        // Check if data is finished
        if (dbData[i].dataDigits[2].includes('-')) {
        } 
        // Check if credentials are invalid
        else if (dbData[i].dataDigits == 'Invalid Username/Password'){
            table.push(
                [index+1, i, chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), dbData[i].lastChecked ]
            )
            index++;
        }
        // Then person has data
        else {
        }
        
    }

    console.log(table.toString());
}

module.exports = {
    displayTable,
    displayTableWithData,
    displayTableWithoutData,
    displayTableInvalid
}
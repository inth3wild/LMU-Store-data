const {readfromDB} = require('../database/db');
const Table = require('cli-table');
const chalk = require('chalk')


function displayTable(params) {
    let dbData = readfromDB();

    // Instantiate command line table
    let table = new Table({
        head: [chalk.white('Username'), chalk.white('Total Bandwidth'), chalk.white('Total Used'), chalk.white('Total Balance'), chalk.white('Last Checked')], 
    });


    for(let i in dbData){
        // Check if data is finished
        if (dbData[i].dataDigits[2].includes('-')) {
            table.push(
                [ i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.red(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
            
        } 
        // Check if credentials are invalid
        else if (dbData[i].dataDigits == 'Invalid Username/Password'){
            table.push(
                [ i, chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), chalk.yellow(dbData[i].dataDigits), dbData[i].lastChecked ]
            )
        }
        // Then person has data
        else {
            table.push(
                [ i, dbData[i].dataDigits[0], dbData[i].dataDigits[1], chalk.green(dbData[i].dataDigits[2]), dbData[i].lastChecked ]
            )
        }
        
    }

    console.log(table.toString());
}


module.exports = displayTable;
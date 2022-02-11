const { displayTable, displayTableWithData, displayTableWithoutData, displayTableInvalid } = require('../modules/displayTable');
const options = require('../index');

function display(options) {
    // Display results in cli table

    if (options.hasData) {
        displayTableWithData();
    } 
    else if (options.empty) {
        displayTableWithoutData();
    }
    else if (options.invalid) {
        displayTableInvalid();
    }
    else{
        displayTable();
    }

}


module.exports = display;

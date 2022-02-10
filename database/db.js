const JSONdb = require('simple-json-db');
const db = new JSONdb('database.json');


function saveToDB(username, dataDigits) {
    // Format current date in dd/mm/yy format
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
    let todaysDate = dd + '/' + mm + '/' + yy;


    db.set(username, {
        'dataDigits': dataDigits,
        'lastChecked': todaysDate
    })
}


function readfromDB(params) {
    let dbData = db.JSON();
    return dbData
}



module.exports = {
    saveToDB,
    readfromDB
}

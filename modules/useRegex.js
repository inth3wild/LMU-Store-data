const {saveToDB} = require('../database/db');


function useRegex(responseData, username) {

    if (responseData.includes('Invalid Username/Password')) {
        let dataDigits = 'Invalid Username/Password'
        
        // Save response to database
        saveToDB(username, dataDigits)
    } else {
        let dataDigits = responseData.match(/-?[0-9]{1,3}\.[0-9]{1,3} [A-Za-z]*/g);
      
        // Save response to database
        saveToDB(username, dataDigits)
    }

}

module.exports = useRegex;
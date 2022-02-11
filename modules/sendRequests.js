const axios = require('axios').default;
const useRegex = require('../modules/useRegex');


function sendRequest(encryptedData, username, paramObj, callback) {
    axios({
        url: 'https://netsurf.lmu.edu.ng/ajax/bals.php',
        method: 'POST',
        headers: {
            'Accept-Encoding': 'gzip', 
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: `head=["shgBKOVPjxE=","G3EkHHMA/aU=","olvO0CaThvf4kUsw","olvO0CaThvf4kUsw"]&tail=${encryptedData}`,
    })
    .then((response) => {

        // Use reqular expressions to get username and data balance from response
        useRegex(response.data, username);

        if(paramObj.index == paramObj.length) {
            // Call the callback function which is displayTable
            callback()
        }   

        
    })
    .catch((error) => {
        if (error.code == 'ETIMEDOUT') {
            console.log('Bad network, Retrying...');
            sendRequest(encryptedData, username, paramObj, callback)
        }
    })


}


module.exports = sendRequest;
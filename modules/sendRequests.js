const axios = require('axios').default;



function sendRequest(encryptedData) {
    axios({
        url: 'https://netsurf.lmu.edu.ng/ajax/bals.php',
        method: 'POST',
        headers: {'Accept-Encoding':'gzip', 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
        data: `head=["shgBKOVPjxE=","G3EkHHMA/aU=","olvO0CaThvf4kUsw","olvO0CaThvf4kUsw"]&tail=${encryptedData}`,
    })
    .then((response) => {

        console.log(response.data);
    })
    .catch((error) => {
        console.log('WE have Error');
        // console.log(error);
    })

    
}


module.exports = sendRequest;
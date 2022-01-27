const encrypt = require('./milk');
const { encode, decode } = require('url-encode-decode');



function encryptData(userName, password) {
    let encryptionKey = 'euqu3r!RtyuWe35t';

    // urlencode the encrypted username and password
    let encryptedUsername = encode( encrypt(userName, encryptionKey) );
    let encryptedPassword = encode( encrypt(password, encryptionKey) );

    // return formatted string that resembles the "tail" form field sent in netsurf's request
    return `["${encryptedUsername}","${encryptedPassword}","ndRqubVtsDQXXU86UhbIqTbybjA%3D","ndRqubVtsDQXXU86UhbIqTbybjA%3D"]`;
}

module.exports = encryptData;
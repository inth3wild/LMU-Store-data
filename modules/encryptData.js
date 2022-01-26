const encrypt = require('./milk');


function encryptData(userName, password) {
    let encryptionKey = 'euqu3r!RtyuWe35t';

    let encryptedUsername = encrypt(userName, encryptionKey);
    let encryptedPassword = encrypt(password, encryptionKey);

    return [encryptedUsername, encryptedPassword, 'ndRqubVtsDQXXU86UhbIqTbybjA=', 'ndRqubVtsDQXXU86UhbIqTbybjA='];
}

module.exports = encryptData;
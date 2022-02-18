const JSONdb = require("simple-json-db");
const homedir = require("os").homedir();
const path = require("path");

// globally store database file
const db = new JSONdb(path.join(homedir, ".database.json"));

function saveToDB(username, dataDigits, encryptedData) {
  // Format current date in dd/mm/yy format
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();
  let todaysDate = dd + "/" + mm + "/" + yy;

  db.set(username, {
    dataDigits: dataDigits,
    lastChecked: todaysDate,
    encryptedData: encryptedData,
  });

  return;
}

function readfromDB(params) {
  let dbData = db.JSON();
  return dbData;
}

function removefromDB(username) {
  db.delete(username);

  return;
}

module.exports = {
  saveToDB,
  readfromDB,
  removefromDB,
};

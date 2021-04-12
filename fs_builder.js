var fs = require('fs');
var https = require('https');
var admin = require("firebase-admin");
var serviceAccount = require("./bmven-a02bd-firebase-adminsdk-sw2f9-5036404851.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bmven-a02bd.firebaseio.com",
  storageBucket: "bmven-a02bd.appspot.com"
});
const $db = admin.firestore();
const $st = admin.storage();
const $bucket = admin.storage().bucket();



$bucket.getFiles().then(obj => {
    let storeFiles = []
    obj[0].forEach(file => {
        if (file.name.split('/')[0] === 'bmv') storeFiles.push(file.name.split('/')[1]);
    });
    //console.log(storeFiles)

    let repoFiles = fs.readdirSync('static/_vue_builder/');
    //console.log(repoFiles)

    storeFiles.forEach(function(item, i, controlBase) {
        if (!contains(repoFiles, item)) {
            upload(item, 'https://firebasestorage.googleapis.com/v0/b/bmven-a02bd.appspot.com/o/bmv%2F' + item + '?alt=media&token=7611506e-f338-4ae2-8eca-ed8b85739113');
        }
    });
})


  // функция проверки наличия элемента в массиве
  function contains(arr, elem) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === elem) {
              return true;
          }
      }
      return false;
  }
  // функция скачивания из фаербейза
  function upload(nameFile, linkFile) {
      if (nameFile && linkFile) {
        let file = fs.createWriteStream("./static/_vue_builder/" + nameFile);
        let request = https.get(linkFile, function(response) {
          response.pipe(file);
        });
        console.log("Успешно скачан " + nameFile);
      } else console.log("Файл не скачан, ошибка в данных");
  }
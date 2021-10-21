var fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("./bmven-a02bd-firebase-adminsdk-sw2f9-5036404851.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bmven-a02bd.firebaseio.com",
  storageBucket: "bmven-a02bd.appspot.com"
})
const $bucket = admin.storage().bucket();

// чистка папки с компонентами в storage
$bucket.getFiles().then(obj => {
  obj[0].forEach(file => {
      if (file.name.split('/')[0] === 'builder_components' && file.name.split('/')[1] !== '') $bucket.file(file.name).delete().then(() => console.log(file.name + ' is deleted'));
  });
}).then(() => {
  let repoFiles = fs.readdirSync('components/bmv/');
  for (const key in repoFiles) {
    if (Object.hasOwnProperty.call(repoFiles, key)) {
      const element = repoFiles[key];
      uploadFile('components/bmv/' + element, 'builder_components/' + element)
    }
  }
})

async function uploadFile(filePath, destFileName) {
  await $bucket.upload(filePath, {
    destination: destFileName,
  });
  console.log(`${filePath} uploaded`);
}

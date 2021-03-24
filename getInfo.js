var fs = require('fs');
var sortobject = require('deep-sort-object');
var admin = require("firebase-admin");
var serviceAccount = require("./bmven-a02bd-firebase-adminsdk-sw2f9-5036404851.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bmven-a02bd.firebaseio.com"
  });
let db = admin.firestore();

function escape (key, val) {
    if (typeof(val)!="string") return val;
    return val
        .replace(/\\n/g, "\n")
    ;
}

db.collection('articles').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let path = 'content/articles/' + doc.id + '.json';
        let json = JSON.stringify(sortobject(doc.data()), escape, 4);
        console.log('complete ' + json);
        fs.writeFile (path, json, function(err) {
            if (err) throw err;
            console.log('complete ' + path);
          });
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
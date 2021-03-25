var fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("./bmven-a02bd-firebase-adminsdk-sw2f9-5036404851.json");
var sortobject = require('deep-sort-object');
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


getBuilder('ru', 'services')
getBuilder('ru', 'articles')

function getBuilder(lang, type) {
  fs.rmdir('content/'+lang+'/'+type, { recursive: true }, (err) => {
      if (err) {
          throw err;
      }
      console.log('content/'+lang+'/'+type + ' is deleted!');
      fs.mkdir('content/'+lang+'/'+type, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.")
        }
      })
  });
  db.collection('bmv').doc(''+lang).collection(''+type).get()
    .then((snapshot) => {
      console.log(snapshot)
      snapshot.forEach((doc) => {
        console.log(doc.data())
        let path = 'content/'+lang+'/'+type+'/' + doc.id + '.json';
        let json = doc.data();
        json.page.forEach((item, i) => {
          let bufArray = []
          for (let obj in item.props.boolean) bufArray.push({[obj]: item.props.boolean[obj]})
          for (let obj in item.props.editor) bufArray.push({[obj]: json.strings[item.props.editor[obj]]})
          for (let obj in item.props.string) bufArray.push({[obj]: json.strings[item.props.string[obj]]})
          for (let obj in item.props.imgs) bufArray.push({[obj]: '/_vue_builder/' + item.props.imgs[obj]})
          for (let obj in item.props.links) bufArray.push({[obj]: item.props.links[obj]})
          json.page[i].props = bufArray
          delete json.page[i].edit
        })
        delete json["strings"]
        json['path_nuxt'] = json.path
        json = JSON.stringify(sortobject(json), escape, 4);

        fs.writeFile (path, json, function(err) {
          if (err) throw err;
            console.log('complete ' + path);
          }
        );
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}
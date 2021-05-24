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

var components = require('./json/bmv.json')

migration('ru', 'articles')
migration('ru', 'objects')
migration('ru', 'services')

function migration(lang, type) {
  db.collection('bmv').doc(''+lang).collection(''+type).get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let outPage = doc.data()

        outPage.page.forEach((elem, i) => {
          let defComponent = components.find(item => item.name == elem.name)
          if (defComponent) {
            if (!elem.hasOwnProperty('preview')) elem.preview = ''
            if (!elem.hasOwnProperty('selects')) elem.selects = defComponent.selects
            if (!elem.hasOwnProperty('placeholders')) elem.placeholders = defComponent.placeholders
            if (!elem.hasOwnProperty('orders')) elem.orders = defComponent.orders
            if (!elem.props.hasOwnProperty('custom')) elem.props.custom = defComponent.props.custom
            if (!elem.props.hasOwnProperty('links')) elem.props.links = defComponent.props.links
            if (!elem.props.hasOwnProperty('selects')) elem.props.selects = defComponent.props.selects
          }
          if (elem.name == 'space' && elem.props.boolean.hasOwnProperty('note')) delete elem.props.boolean.note
          if (elem.name == 'space' && elem.props.string.hasOwnProperty('name_class')) delete elem.props.string.name_class
          //console.log(elem)
        })
        if (!outPage.hasOwnProperty('needTranslate')) outPage.needTranslate = false
        if (!outPage.hasOwnProperty('lock')) outPage.lock = false
        if (!outPage.hasOwnProperty('tags')) outPage.tags = []
        console.log(outPage)

        db.collection('bmv').doc(''+lang).collection(''+type).doc(''+outPage.id).set(outPage).then(() => {
          console.log("Сохранено")
        })

      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
}
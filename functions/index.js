const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

//Get people list
exports.peopleList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("people")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.send(listArray);
    });
});

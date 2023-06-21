const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

//---------------++++People++++---------------
//Get people list
exports.peopleList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("people")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get a person
exports.person = functions.https.onRequest((request, response) => {
  const querySnapshot = db
    .collection("people")
    .where("id", "==", request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        response.status(404).send("No matching document found");
      } else {
        const data = snapshot.docs[0].data();
        response.status(200).send(data);
      }
    });
});

//---------------++++activeEngagements++++---------------
//Get activeEngagements list
exports.activeEngagementsList = functions.https.onRequest(
  (request, response) => {
    const listArray = [];
    db.collection("activeEngagements")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          listArray.push({ ...doc.data(), id: doc.id });
        });
        response.status(200).send(listArray);
      });
  }
);

//---------------++++collections++++---------------
//Get collections list
exports.collectionsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("collections")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++events++++---------------
//Get events list
exports.eventsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("events")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++events++++---------------
//Get expertRequests list
exports.expertRequestsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("expertRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++expertSuggestions++++---------------
//Get expertSuggestions list
exports.expertSuggestionsList = functions.https.onRequest(
  (request, response) => {
    const listArray = [];
    db.collection("expertSuggestions")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          listArray.push({ ...doc.data(), id: doc.id });
        });
        response.status(200).send(listArray);
      });
  }
);

//---------------++++feedback++++---------------
//Get feedback list
exports.feedbackList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("feedback")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++industries++++---------------
//Get industries list
exports.industriesList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("industries")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++networkRequests++++---------------
//Get networkRequests list
exports.networkRequestsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("networkRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++timezones++++---------------
//Get timezones list
exports.timezonesList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("timezones")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++users++++---------------
//Get users list
exports.usersList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

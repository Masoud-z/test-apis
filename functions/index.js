const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

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
exports.getPerson = functions.https.onRequest((request, response) => {
  db.collection("people")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a person
exports.createPerson = functions.https.onRequest((request, response) => {
  db.collection("people")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Person created");
    });
});

//Update a person
exports.updatePerson = functions.https.onRequest((request, response) => {
  db.collection("people")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Person Updated");
    });
});

//Delete a person
exports.deletePerson = functions.https.onRequest((request, response) => {
  db.collection("people")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("Person Deleted");
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

//Get an activeEngagements
exports.getActiveEngagements = functions.https.onRequest(
  (request, response) => {
    db.collection("activeEngagements")
      .doc(request.query.id)
      .get()
      .then((snapshot) => {
        if (snapshot.id) {
          const data = { ...snapshot.data(), id: snapshot.id };
          response.status(200).send(data);
        } else {
          response.status(404).send("No matching document found");
        }
      });
  }
);

//Update an activeEngagements
exports.updateActiveEngagements = functions.https.onRequest(
  (request, response) => {
    db.collection("activeEngagements")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ActiveEngagements Updated");
      });
  }
);

//Creat an activeEngagements
exports.createActiveEngagements = functions.https.onRequest(
  (request, response) => {
    db.collection("activeEngagements")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ActiveEngagements created");
      });
  }
);

//Delete an activeEngagements
exports.deleteActiveEngagements = functions.https.onRequest(
  (request, response) => {
    db.collection("activeEngagements")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("ActiveEngagements Deleted");
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

//Get a collection
exports.getOneCollection = functions.https.onRequest((request, response) => {
  db.collection("collections")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a collection
exports.createCollection = functions.https.onRequest((request, response) => {
  db.collection("collections")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Collection created");
    });
});

//Update a collection
exports.updateCollection = functions.https.onRequest((request, response) => {
  db.collection("collections")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("collection Updated");
    });
});

//Delete a collection
exports.deleteCollection = functions.https.onRequest((request, response) => {
  db.collection("collections")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("Collections Deleted");
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

//Get an event
exports.getAnEvent = functions.https.onRequest((request, response) => {
  db.collection("events")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create an Event
exports.createEvent = functions.https.onRequest((request, response) => {
  db.collection("events")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Event created");
    });
});

//Update an Event
exports.updateEvent = functions.https.onRequest((request, response) => {
  db.collection("events")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Event Updated");
    });
});

//Delete an Event
exports.deleteEvent = functions.https.onRequest((request, response) => {
  db.collection("events")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("Event Deleted");
    });
});

//---------------++++expertRequests++++---------------
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

//Get an ExpertRequest
exports.getAnExpertRequest = functions.https.onRequest((request, response) => {
  db.collection("expertRequests")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create an ExpertRequest
exports.createAnExpertRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("expertRequests")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ExpertRequest created");
      });
  }
);

//Update an ExpertRequest
exports.updateAnExpertRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("expertRequests")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ExpertRequest Updated");
      });
  }
);

//Delete an ExpertRequest
exports.deleteAnExpertRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("expertRequests")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("ExpertRequest Deleted");
      });
  }
);

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

//Get an ExpertSuggestion
exports.getAnExpertSuggestion = functions.https.onRequest(
  (request, response) => {
    db.collection("expertSuggestions")
      .doc(request.query.id)
      .get()
      .then((snapshot) => {
        if (snapshot.id) {
          const data = { ...snapshot.data(), id: snapshot.id };
          response.status(200).send(data);
        } else {
          response.status(404).send("No matching document found");
        }
      });
  }
);

//Create an ExpertSuggestion
exports.createAnExpertSuggestion = functions.https.onRequest(
  (request, response) => {
    db.collection("expertSuggestions")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ExpertSuggestion created");
      });
  }
);

//Update an ExpertSuggestion
exports.updateAnExpertSuggestion = functions.https.onRequest(
  (request, response) => {
    db.collection("expertSuggestions")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("ExpertSuggestion Updated");
      });
  }
);

//Delete an ExpertSuggestion
exports.deleteExpertSuggestion = functions.https.onRequest(
  (request, response) => {
    db.collection("expertSuggestions")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("ExpertSuggestion Deleted");
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

//Get a feedback
exports.getFeedback = functions.https.onRequest((request, response) => {
  db.collection("feedback")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a Feedback
exports.createFeedback = functions.https.onRequest((request, response) => {
  db.collection("feedback")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Feedback created");
    });
});

//Update a Feedback
exports.updateFeedback = functions.https.onRequest((request, response) => {
  db.collection("feedback")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Feedback Updated");
    });
});

//Delete a Feedback
exports.deleteFeedback = functions.https.onRequest((request, response) => {
  db.collection("feedback")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("Feedback Deleted");
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

//Get an Industrie
exports.getAnIndustrie = functions.https.onRequest((request, response) => {
  db.collection("industries")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create an Industrie
exports.createAnIndustrie = functions.https.onRequest((request, response) => {
  db.collection("industries")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Industrie created");
    });
});

//Update an Industrie
exports.updateAnIndustrie = functions.https.onRequest((request, response) => {
  db.collection("industries")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Industrie Updated");
    });
});

//Delete an Industrie
exports.deleteAnIndustrie = functions.https.onRequest((request, response) => {
  db.collection("industries")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("Industrie Deleted");
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

//Get a NetworkRequest
exports.getNetworkRequest = functions.https.onRequest((request, response) => {
  db.collection("networkRequests")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a networkRequest
exports.createNetworkRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("networkRequests")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("NetworkRequest created");
      });
  }
);

//Update a NetworkRequest
exports.updateNetworkRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("networkRequests")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("NetworkRequest Updated");
      });
  }
);

//Delete a NetworkRequest
exports.deleteNetworkRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("networkRequests")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("NetworkRequest Deleted");
      });
  }
);

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

//Get a user
exports.getUser = functions.https.onRequest((request, response) => {
  db.collection("users")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a user
exports.createUser = functions.https.onRequest((request, response) => {
  db.collection("users")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("User created");
    });
});

//Update a User
exports.updateUser = functions.https.onRequest((request, response) => {
  db.collection("users")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("User Updated");
    });
});

//Delete a User
exports.deleteUser = functions.https.onRequest((request, response) => {
  db.collection("users")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("User Deleted");
    });
});

//---------------++++AiQuestions++++---------------

//Get AiQuestions list
exports.AiQuestionsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("aiQuestions")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get an AiQuestion
exports.getAnAiQuestion = functions.https.onRequest((request, response) => {
  db.collection("aiQuestions")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create an AiQuestion
exports.createAnAiQuestion = functions.https.onRequest((request, response) => {
  db.collection("aiQuestions")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("AiQuestion created");
    });
});

//Update an AiQuestion
exports.updateAnAiQuestion = functions.https.onRequest((request, response) => {
  db.collection("aiQuestions")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("AiQuestion Updated");
    });
});

//Delete an AiQuestion
exports.deleteAnAiQuestion = functions.https.onRequest((request, response) => {
  db.collection("aiQuestions")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("AiQuestion Deleted");
    });
});

//---------------++++CallRecordings++++---------------
//Get CallRecordings list
exports.callRecordingsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("callRecordings")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get a CallRecording
exports.getCallRecording = functions.https.onRequest((request, response) => {
  db.collection("callRecordings")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a CallRecording
exports.createCallRecording = functions.https.onRequest((request, response) => {
  db.collection("callRecordings")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("CallRecording created");
    });
});

//Update a CallRecording
exports.updateCallRecording = functions.https.onRequest((request, response) => {
  db.collection("callRecordings")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("CallRecording Updated");
    });
});

//Delete a CallRecording
exports.deleteCallRecording = functions.https.onRequest((request, response) => {
  db.collection("callRecordings")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("CallRecording Deleted");
    });
});



//---------------++++CallRequests++++---------------
//Get CallRequests list
exports.CallRequestList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("callRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get a CallRequest
exports.getCallRequest = functions.https.onRequest((request, response) => {
  db.collection("callRequests")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = { ...snapshot.data(), id: snapshot.id };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Create a CallRequest
exports.createCallRequest = functions.https.onRequest((request, response) => {
  db.collection("callRequests")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("CallRequest created");
    });
});

//Update a CallRequest
exports.updateCallRequest = functions.https.onRequest((request, response) => {
  db.collection("callRequests")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("CallRequest Updated");
    });
});

//Delete a CallRequest
exports.deleteCallRequest = functions.https.onRequest((request, response) => {
  db.collection("callRequests")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("CallRequest Deleted");
    });
});


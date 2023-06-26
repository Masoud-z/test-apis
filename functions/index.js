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
        listArray.push({
          ...doc.data(),
          id: doc.id,
          namd: `${doc.data().first_name} ${doc.data().last_name}`,
        });
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
        const data = {
          ...snapshot.data(),
          id: snapshot.id,
          namd: `${doc.data().first_name} ${doc.data().last_name}`,
        };
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

//Get expertRequests list of a user
exports.expertRequestsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("expertRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().requestor.id == request.query.requestorId)
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

//Get networkRequests list of a user
exports.networkRequestsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("networkRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().requestor.id == request.query.requestorId) {
          listArray.push({ ...doc.data(), id: doc.id });
        }
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

//Get CallRequests list of a user
exports.CallRequestList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("callRequests")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().requestor.id == request.query.requestorId)
          listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//---------------++++balances++++---------------

//Create a Balance
exports.createBalance = functions.https.onRequest((request, response) => {
  db.collection("balances")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("Balance created");
    });
});

//Get a Balance
exports.getBalance = functions.https.onRequest((request, response) => {
  db.collection("balances")
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

//Add Balance to a user
exports.addBalance = functions.https.onRequest((request, response) => {
  db.collection("balances")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      //Get the balance added by user
      const AddedBalance = +JSON.parse(request.body).AddedBalance;

      if (snapshot.id) {
        const data = { ...snapshot.data() };

        db.collection("balances")
          .doc(request.query.id)
          .update({
            ...data,
            available_balance: data.available_balance + AddedBalance,
            balance: data.balance + AddedBalance,
          })
          .then(() => {
            db.collection("balances")
              .doc(request.query.id)
              .get()
              .then((snapshot) => {
                if (snapshot.id) {
                  const data = { ...snapshot.data(), id: snapshot.id };
                  response.status(200).send(data);
                }
              });
          });
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//---------------++++callTranscriptions++++---------------
//Get a callTranscription
exports.getCallTranscription = functions.https.onRequest(
  (request, response) => {
    db.collection("callTranscriptions")
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

//Create a CallTranscription
exports.createCallTranscription = functions.https.onRequest(
  (request, response) => {
    db.collection("callTranscriptions")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("CallTranscription created");
      });
  }
);

//Update a CallTranscription
exports.updateCallTranscription = functions.https.onRequest(
  (request, response) => {
    db.collection("callTranscriptions")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("CallTranscription Updated");
      });
  }
);

//Delete a CallTranscription
exports.deleteCallTranscription = functions.https.onRequest(
  (request, response) => {
    db.collection("callTranscriptions")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("CallTranscription Deleted");
      });
  }
);

//---------------++++DonationRequests++++---------------
//Get DonationRequests list
exports.DonationRequestsList = functions.https.onRequest(
  (request, response) => {
    const listArray = [];
    db.collection("donationRequests")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          listArray.push({ ...doc.data(), id: doc.id });
        });
        response.status(200).send(listArray);
      });
  }
);

//Get a DonationRequest
exports.getDonationRequest = functions.https.onRequest((request, response) => {
  db.collection("donationRequests")
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

//Create a DonationRequest
exports.createDonationRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("donationRequests")
      .add(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("DonationRequest created");
      });
  }
);

//Update a DonationRequest
exports.updateDonationRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("donationRequests")
      .doc(request.query.id)
      .update(JSON.parse(request.body))
      .then(() => {
        response.status(200).send("DonationRequest Updated");
      });
  }
);

//Delete a DonationRequest
exports.deleteDonationRequest = functions.https.onRequest(
  (request, response) => {
    db.collection("donationRequests")
      .doc(request.query.id)
      .delete()
      .then(() => {
        response.status(200).send("DonationRequest Deleted");
      });
  }
);

//---------------++++EventQuestions++++---------------
//Get EventQuestions list
exports.EventQuestionsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("eventQuestions")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get a EventQuestion
exports.getEventQuestion = functions.https.onRequest((request, response) => {
  db.collection("eventQuestions")
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

//Create a EventQuestion
exports.createEventQuestion = functions.https.onRequest((request, response) => {
  db.collection("eventQuestions")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("EventQuestion created");
    });
});

//Update a EventQuestion
exports.updateEventQuestion = functions.https.onRequest((request, response) => {
  db.collection("eventQuestions")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("EventQuestion Updated");
    });
});

//Delete a EventQuestion
exports.deleteEventQuestion = functions.https.onRequest((request, response) => {
  db.collection("eventQuestions")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("EventQuestion Deleted");
    });
});

//---------------++++GeographicTags++++---------------
//Get GeographicTags list
exports.GeographicTagsList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("geographicTags")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get a GeographicTag
exports.getGeographicTag = functions.https.onRequest((request, response) => {
  db.collection("geographicTags")
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

//Create a GeographicTag
exports.createGeographicTag = functions.https.onRequest((request, response) => {
  db.collection("geographicTags")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("GeographicTag created");
    });
});

//Update a GeographicTag
exports.updateGeographicTag = functions.https.onRequest((request, response) => {
  db.collection("geographicTags")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("GeographicTag Updated");
    });
});

//Delete a GeographicTag
exports.deleteGeographicTag = functions.https.onRequest((request, response) => {
  db.collection("geographicTags")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("GeographicTag Deleted");
    });
});

//---------------++++InviteDocument++++---------------
//Get InviteDocument list
exports.inviteDocumentList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("inviteDocument")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({ ...doc.data(), id: doc.id });
      });
      response.status(200).send(listArray);
    });
});

//Get an InviteDocument
exports.getPerson = functions.https.onRequest((request, response) => {
  db.collection("inviteDocument")
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

//Create an InviteDocument
exports.createPerson = functions.https.onRequest((request, response) => {
  db.collection("inviteDocument")
    .add(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("InviteDocument created");
    });
});

//Update an InviteDocument
exports.updatePerson = functions.https.onRequest((request, response) => {
  db.collection("inviteDocument")
    .doc(request.query.id)
    .update(JSON.parse(request.body))
    .then(() => {
      response.status(200).send("InviteDocument Updated");
    });
});

//Delete an InviteDocument
exports.deletePerson = functions.https.onRequest((request, response) => {
  db.collection("inviteDocument")
    .doc(request.query.id)
    .delete()
    .then(() => {
      response.status(200).send("InviteDocument Deleted");
    });
});

//---------------++++surveys++++---------------
//Get surveys list
exports.surveysList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("surveys")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        listArray.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      response.status(200).send(listArray);
    });
});

//Get a survey
exports.getsurvey = functions.https.onRequest((request, response) => {
  db.collection("surveys")
    .doc(request.query.id)
    .get()
    .then((snapshot) => {
      if (snapshot.id) {
        const data = {
          ...snapshot.data(),
          id: snapshot.id,
        };
        response.status(200).send(data);
      } else {
        response.status(404).send("No matching document found");
      }
    });
});

//Get surveys list of a user
exports.surveysList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("surveys")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().requestor.id == request.query.requestorId) {
          listArray.push({
            ...doc.data(),
            id: doc.id,
          });
        }
      });
      response.status(200).send(listArray);
    });
});

//---------------++++transactions++++---------------
//Get transactions list of a user
exports.surveysList = functions.https.onRequest((request, response) => {
  const listArray = [];
  db.collection("transactions")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().users[0].id == request.query.requestorId) {
          listArray.push({
            ...doc.data(),
            id: doc.id,
          });
        }
      });
      response.status(200).send(listArray);
    });
});

db.settings({ timestampsInSnapshots: true });

db.collection("people")
  .where("id", "==", "dfdfgrfth")
  .get()
  .then((snapshot) => {
    const data = snapshot.docs[0].data();
    console.log(data);
  });

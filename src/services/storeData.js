const { Firestore } = require("@google-cloud/firestore");

const db = new Firestore();

async function storeData(id, data) {
  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

async function getData() {
  const predictCollection = db.collection("predictions");

  const snapshot = await predictCollection.get()

  if(snapshot.empty) return [];

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return data;
}

module.exports = { storeData, getData };

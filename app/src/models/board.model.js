const admin = require("firebase-admin");

const Board = {
  getBoards: () =>
    admin
      .database()
      .ref("boards")
      .once("value")
      .then(snap => snap.val())
      .then(val => Object.keys(val).map(key => val[key]))
  // let db = admin.firestore();
  // let response = [];

  // db.collection("boards")
  //   .get()
  //   .then(snapshot => {
  //     snapshot.forEach(doc => {
  //       var newelement = {
  //         name: doc.data().name,
  //         createdTimestamp: doc.data().createdTimestamp.toString()
  //       };
  //       stuff = stuff.concat(newelement);
  //     });
  //     return response;
  //   })
  //   .catch(reason => {
  //     res.send(reason);
  //   });
  //}
};

export default Board;

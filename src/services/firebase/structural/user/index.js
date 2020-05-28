import { fs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 09-03-2020
 */
const onGetCompanies = (uid, thenFunc) => {
  let data = {};
  fs.collection("users")
    .doc(uid)
    .collection("companies")
    .where("active", "==", true)
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(docChange => {
        switch (docChange.type) {
          case "added":
            data = Object.assign({}, data, {
              [docChange.doc.id]: docChange.doc.data()
            });
            break;
          case "modified":
            data = Object.assign({}, data, {
              [docChange.doc.id]: docChange.doc.data()
            });
            break;
          case "removed":
            data = Object.keys(data).reduce((acc, crr) => {
              if (crr !== docChange.doc.id) acc[crr] = data[crr];
              return acc;
            }, {});
            break;
          default:
            break;
        }
      });
      thenFunc(data);
    });
};

export { onGetCompanies };

import { fs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 16-12-2019
 */
export const onGetRoutes = thenFunc => {
  let routes = {},
    unsubscribe = fs
      .collection("routes")
      .where("active", "==", true)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(docChange => {
          switch (docChange.type) {
            case "added":
              routes = Object.assign({}, routes, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  key: docChange.doc.id
                }
              });
              break;
            case "modified":
              routes = Object.assign({}, routes, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  key: docChange.doc.id
                }
              });
              break;
            case "removed":
              routes = Object.keys(routes).reduce((acc, crr) => {
                if (crr !== docChange.doc.id) acc[crr] = routes[crr];
                return acc;
              }, {});
              break;
            default:
              break;
          }
        });
        thenFunc(routes);
      });
  return unsubscribe;
};

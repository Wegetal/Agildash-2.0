import { companyFs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 19-02-2020
 */
export let userRef;
export const makeUserFirebase = uid => {
  userRef = companyFs.collection("users").doc(uid);
  return userRef;
};

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-12-2019
 */

export const onGetCompanyUserDashboards = thenFunc => {
    let dashboards = {};
    userRef
      .collection("dashboards")
      .where("active", "==", true)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(docChange => {
          switch (docChange.type) {
            case "added":
              dashboards = Object.assign({}, dashboards, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  dashboardKey: docChange.doc.id
                }
              });
              break;
            case "modified":
              dashboards = Object.assign({}, dashboards, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  dashboardKey: docChange.doc.id
                }
              });
              break;
            case "removed":
              dashboards = Object.keys(dashboards).reduce((acc, crr) => {
                if (crr !== docChange.doc.id) acc[crr] = dashboards[crr];
                return acc;
              }, {});
              break;
            default:
              break;
          }
        });
        thenFunc(dashboards);
      });
  },
  onGetCompanyUserData = thenFunc => {
    userRef.onSnapshot(docSnaphost => {
      thenFunc({ ...docSnaphost.data(), id: docSnaphost.id });
    });
  },
  onGetCompanyUserRoutes = thenFunc => {
    let routes = {},
      unsubscribe = userRef
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

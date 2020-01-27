import { companyFs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-12-2019
 */

export const onGetCompanyUserDashboards = (uid, thenFunc) => {
    let dashboards = {};
    companyFs
      .collection("users")
      .doc(uid)
      .collection("dashboards")
      .where("active", "==", true)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(docChange => {
          switch (docChange.type) {
            case "added":
              dashboards = Object.assign({}, dashboards, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  key: docChange.doc.id
                }
              });
              break;
            case "modified":
              dashboards = Object.assign({}, dashboards, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  key: docChange.doc.id
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
  onGetCompanyUserData = (uid, thenFunc) => {
    companyFs
      .collection("users")
      .doc(uid)
      .onSnapshot(docSnaphost => {
        thenFunc({ ...docSnaphost.data(), id: docSnaphost.id });
      });
  },
  onGetCompanyUserRoutes = (uid, thenFunc) => {
    let routes = {},
      unsubscribe = companyFs
        .collection("users")
        .doc(uid)
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

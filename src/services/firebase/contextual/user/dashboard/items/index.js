import { dashboardRef } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 19-02-2020
 */
export const onGetDashboardItems = thenFunc => {
  let items = {},
    unsubscrive = dashboardRef
      .collection("dashItems")
      .where(
        `${process.env.REACT_APP_DEVICE}.${process.env.REACT_APP_ENV}`,
        "==",
        true
      )
      .orderBy("position")
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(docChange => {
          switch (docChange.type) {
            case "added":
              items = Object.assign({}, items, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  itemKey: docChange.doc.id
                }
              });
              break;
            case "modified":
              items = Object.assign({}, items, {
                [docChange.doc.id]: {
                  ...docChange.doc.data(),
                  itemKey: docChange.doc.id
                }
              });
              break;
            case "removed":
              items = Object.keys(items).reduce((acc, crr) => {
                if (crr !== docChange.doc.id) acc[crr] = items[crr];
                return acc;
              }, {});
              break;
            default:
              break;
          }
        });
        thenFunc(items);
      });
  return unsubscrive;
};

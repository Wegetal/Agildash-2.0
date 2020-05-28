import { auth, fs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 10-03-2020
 */

const createLog = (ref, type) => {
  fs.collection("userLogs")
    .doc()
    .set({
      time: new Date(),
      path: ref.path,
      type,
      auth: auth.currentUser.uid
    });
  return ref;
};

export default createLog;

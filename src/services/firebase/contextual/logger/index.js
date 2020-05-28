import { companyAuth, companyFs } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 10-03-2020
 */

const createLog = (ref, type) => {
  companyFs
    .collection("userLogs")
    .doc()
    .set({
      time: new Date(),
      path: ref.path,
      type,
      user: companyAuth.currentUser.uid
    });
  return ref;
};

export default createLog;

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 09-04-2020
 */

import { companyFs, companyFnc } from "../firebase/contextual";

const createRequestMaker = (datasource, requestBody) => {
  let req = companyFs.collection("requisitionRequests").doc();
  return async (itemKey) => {
    console.log(new Date());
    return req
      .set({
        datasource,
        ...requestBody,
        itemKey: itemKey,
        env: process.env.REACT_APP_ENV,
        date: new Date(),
      })
      .then(async () => {
        console.log(new Date());
        return companyFnc.httpsCallable("requestDispatcher")({
          requisition: req.id,
        });
      });
  };
};

export default createRequestMaker;

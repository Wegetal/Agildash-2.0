import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

let companyApp, companyAuth, companyFs;
const makeCompanyFirebase = (companyId, companyConfig) => {
  try {
    companyApp = firebase.app(companyId);
  } catch (error) {
    companyApp = firebase.initializeApp(companyConfig, companyId);
  }
  companyAuth = companyApp.auth();
  companyFs = companyApp.firestore();
};

export { companyApp, companyAuth, companyFs, makeCompanyFirebase };

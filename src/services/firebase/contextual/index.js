import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-12-2019
 */
export let companyApp, companyAuth, companyFs;
export const makeCompanyFirebase = (companyId, companyConfig) => {
    try {
      companyApp = firebase.app(companyId);
    } catch (error) {
      companyApp = firebase.initializeApp(companyConfig, companyId);
    }
    companyAuth = companyApp.auth();
    companyFs = companyApp.firestore();
  },
  checkEnvForCompany = () => {
    return !!companyApp;
  };

// export { companyApp, companyAuth, companyFs, makeCompanyFirebase };

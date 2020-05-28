import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/functions";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 06-12-2019
 */
export let companyApp, companyAuth, companyFs, companyFnc;
export const makeCompanyFirebase = (companyId, companyConfig) => {
    try {
      companyApp = firebase.app(companyId);
    } catch (error) {
      companyApp = firebase.initializeApp(companyConfig, companyId);
    }
    companyAuth = companyApp.auth();
    companyFs = companyApp.firestore();
    companyFnc = companyApp.functions();
    companyFs.enablePersistence({ synchronizeTabs: true });
  },
  checkEnvForCompany = () => {
    return !!companyApp;
  };

// export { companyApp, companyAuth, companyFs, makeCompanyFirebase };

// import * as firebase from "firebase";
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 09-03-2020
 */
let app = firebase.initializeApp(
  {
    apiKey: "AIzaSyCJolHOd29Weznw8kuzuVg5wBe7nZeEWiI",
    authDomain: "agildash-app-manager.firebaseapp.com",
    databaseURL: "https://agildash-app-manager.firebaseio.com",
    projectId: "agildash-app-manager",
    storageBucket: "agildash-app-manager.appspot.com",
    messagingSenderId: "476648348425",
    appId: "1:476648348425:web:1d279539dac42cca4e91d8"
  },
  "Agildash"
);

const fs = app.firestore(),
  auth = app.auth();
fs.enablePersistence({ synchronizeTabs: true });
export { app, fs, auth };

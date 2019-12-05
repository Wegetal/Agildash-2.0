import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

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

let fs = app.firestore(),
  auth = app.auth();

export { app, fs, auth };

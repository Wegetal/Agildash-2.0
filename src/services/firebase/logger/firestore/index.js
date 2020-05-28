import createCollection from "./collection";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 09-03-2020
 */
class FirestoreLogger {
  path;
  fs;
  constructor(app) {
    this.fs = app.firestore();
  }
  collection = stringPath => {
    let Collection = createCollection(this.fs);
    return new Collection(stringPath);
  };
}

export default FirestoreLogger;

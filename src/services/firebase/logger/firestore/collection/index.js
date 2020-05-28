import * as firestore from "@firebase/firestore";
/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 09-03-2020
 */

const createCollection = function(fs) {
  console.log(firestore);
  class Collection extends fs.collection {
    constructor(fs, stringPath) {
      super(fs, stringPath);

      //   super(path);
      console.log(this.path);
    }
    ensureClientConfigured() {
      fs.ensureClientConfigured();
    }
    doc = stringPath => {
      console.log(this.path);
    };
  }
  return Collection;
};

export default createCollection;

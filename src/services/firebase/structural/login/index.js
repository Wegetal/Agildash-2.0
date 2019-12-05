import { auth } from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 21-10-2019
 */

let signIn = async (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export { signIn };

import { persistStore } from "redux-persist";
import store from "..";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 31-10-2019
 */
const persistor = persistStore(store);

export default persistor;

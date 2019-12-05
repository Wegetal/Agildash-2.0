import { createStore } from "redux";
import persistedReducer from "./persist/reducer";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
const store = createStore(persistedReducer);

export default store;

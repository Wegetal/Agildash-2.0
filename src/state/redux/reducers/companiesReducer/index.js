/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
const INITIAL_STATE = {},
  SET_USER_SELECTABLE_COMPANIES = "SET_USER_SELECTABLE_COMPANIES",
  companiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_USER_SELECTABLE_COMPANIES:
        return { ...action.companies };
      default:
        return state;
    }
  },
  getUserCompaniesState = state => state.userCompaniesState;

export { SET_USER_SELECTABLE_COMPANIES, getUserCompaniesState };
export default companiesReducer;

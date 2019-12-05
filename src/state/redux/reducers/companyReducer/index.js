/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
const INITIAL_STATE = {},
  SET_ACTIVE_COMPANY = "SET_ACTIVE_COMPANY",
  CLEAR_ACTIVE_COMPANY = "CLEAR_ACTIVE_COMPANY",
  companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_COMPANY:
        return { ...action.company, key: action.key };
      case CLEAR_ACTIVE_COMPANY:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  getCompanyState = state => state.companyState;

export { SET_ACTIVE_COMPANY, CLEAR_ACTIVE_COMPANY, getCompanyState };
export default companyReducer;

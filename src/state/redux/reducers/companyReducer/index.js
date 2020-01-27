/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
export const INITIAL_STATE = { settledEnv: false },
  SET_ACTIVE_COMPANY = "SET_ACTIVE_COMPANY",
  CLEAR_ACTIVE_COMPANY = "CLEAR_ACTIVE_COMPANY",
  MANAGE_COMPANY_ENV_STATE = "MANAGE_COMPANY_ENV_STATE",
  companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_COMPANY:
        return { ...action.company, key: action.key };
      case MANAGE_COMPANY_ENV_STATE:
        return Object.assign({}, state, { settledEnv: action.value });
      case CLEAR_ACTIVE_COMPANY:
        return INITIAL_STATE;
      default:
        return state;
    }
  },
  getCompanyState = state => state.companyState;

export default companyReducer;

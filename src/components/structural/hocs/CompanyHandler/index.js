import React from "react";
import { Dialog, DialogContent, ListItem, List } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import withSession from "../withSession";
import { onGetCompanies } from "../../../../services/firebase/structural/user";
import {
  SET_USER_SELECTABLE_COMPANIES,
  getUserCompaniesState
} from "../../../../state/redux/reducers/companiesReducer";
import {
  SET_ACTIVE_COMPANY,
  getCompanyState,
  CLEAR_ACTIVE_COMPANY
} from "../../../../state/redux/reducers/companyReducer";
import { getCompanyConfig } from "../../../../services/firebase/structural/company";
import { makeCompanyFirebase } from "../../../../services/firebase/contextual";
import UserHandler from "../UserHandler";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 02-12-2019
 */
class CompanyHandler extends React.PureComponent {
  componentDidMount() {
    this.onFetchCompanies();
  }
  componentDidUpdate(prevProps) {
    const { companies, activeCompany, clearActiveCompany } = this.props;
    if (prevProps.companies[activeCompany.key] && !companies[activeCompany.key])
      clearActiveCompany();
    if (!prevProps.activeCompany.key && activeCompany.key)
      this.setEnvForCompany();
  }
  setEnvForCompany = () => {
    const { activeCompany } = this.props;
    getCompanyConfig(activeCompany.key).then(item =>
      makeCompanyFirebase(activeCompany.key, item.data())
    );
  };
  onFetchCompanies = () => {
    const { auth, onSetLoadedCompanies } = this.props;
    onGetCompanies(auth.uid, onSetLoadedCompanies);
  };
  onSetActiveCompany = (company, key) => () => {
    const { setActiveCompany } = this.props;
    setActiveCompany(company, key);
  };
  render() {
    const { children, activeCompany, companies, auth } = this.props;

    return (
      <React.Fragment>
        {
          <UserHandler auth={auth} activeCompany={activeCompany.key}>
            {children}
          </UserHandler>
        }
        <Dialog open={!activeCompany.key}>
          <DialogContent>
            <List>
              {Object.keys(companies).map((key, i) => (
                <ListItem
                  button
                  onClick={this.onSetActiveCompany(companies[key], key)}
                  key={i}
                >
                  {companies[key].name}
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProps) => {
    const companiesState = getUserCompaniesState(state),
      companyState = getCompanyState(state);
    return {
      companies: companiesState,
      activeCompany: companyState
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
  onSetLoadedCompanies: companies =>
    dispatch({ type: SET_USER_SELECTABLE_COMPANIES, companies }),
  setActiveCompany: (company, key) =>
    dispatch({ type: SET_ACTIVE_COMPANY, company, key }),
  clearActiveCompany: () => dispatch({ type: CLEAR_ACTIVE_COMPANY })
});

export default compose(
  withSession,
  connect(makeMapStateToProps(), mapDispatchToProps)
)(CompanyHandler);

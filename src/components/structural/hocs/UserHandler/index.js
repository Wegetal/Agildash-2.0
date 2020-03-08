import React from "react";
import { connect } from "react-redux";
import {
  SET_CURRENT_COMPANY_USER_DATA,
  getCompanyUserState
} from "../../../../state/redux/reducers/companyUserReducers";
import {
  onGetCompanyUserDashboards,
  onGetCompanyUserData,
  onGetCompanyUserRoutes
} from "../../../../services/firebase/contextual/user/index";
import { SET_COMPANY_USER_ROUTES_CONFIG } from "../../../../state/redux/reducers/companyUserReducers/companyUserRoutesReducer";
import { SET_COMPANY_USER_DASHBOARDS } from "../../../../state/redux/reducers/companyUserReducers/companyUserDashboardsReducer";
import { makeUserFirebase } from "../../../../services/firebase/contextual/user";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 05-12-2019
 */
class UserHandler extends React.PureComponent {
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = () => {
    const {
      auth,
      setUserDashboards,
      setCurrentUserData,
      setCurrentUserRoutes
    } = this.props;
    makeUserFirebase(auth.uid);
    onGetCompanyUserDashboards(setUserDashboards);
    onGetCompanyUserData(setCurrentUserData);
    onGetCompanyUserRoutes(setCurrentUserRoutes);
  };
  render() {
    const { children } = this.props;

    return <React.Fragment>{children}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
    ...getCompanyUserState(state)
  }),
  mapDispatchToProps = dispatch => ({
    setUserDashboards: dashboards =>
      dispatch({ type: SET_COMPANY_USER_DASHBOARDS, dashboards }),
    setCurrentUserData: data =>
      dispatch({ type: SET_CURRENT_COMPANY_USER_DATA, data }),
    setCurrentUserRoutes: routes =>
      dispatch({ type: SET_COMPANY_USER_ROUTES_CONFIG, routes })
  });

export default connect(mapStateToProps, mapDispatchToProps)(UserHandler);

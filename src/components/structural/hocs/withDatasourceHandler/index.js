import React from "react";
import { connect } from "react-redux";
import { onGetCompanyDatasourceFilters } from "../../../../services/firebase/contextual/company";
import Factory from "../../../../state/redux/factory/factory";
import createDispatchers from "../../../../state/redux/factory/dispatchers";
import getDatasourceData, {
  getFilters,
  getFilterKeys,
} from "../../selectors/DatasourceHandler";
import createRequestMaker from "../../../../services/sourceEngine";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 11-03-2020
 */
const withDatasourceHandler = (Component) => {
  class DatasourceHandler extends React.PureComponent {
    componentDidMount() {
      const { mount } = this.props;
      if (!mount) this.fetchDatasourceInfo();
    }
    fetchDatasourceInfo = () => {
      const {
        datasource,
        onSetMountState,
        onSetFilterInfo,
        onSetDatasourceUnsubscribe,
      } = this.props;
      Factory.createDatasourceEnv({
        itemKey: datasource,
        type: "Datasource",
      })
        .then(() => {
          return onSetDatasourceUnsubscribe(
            onGetCompanyDatasourceFilters(datasource, onSetFilterInfo)
          );
        })
        .then(() => {
          onSetMountState(true);
        });
    };
    componentDidUpdate(prevProps) {
      const { filterKeys } = this.props;
      if (prevProps.filterKeys !== filterKeys && filterKeys.length > 0) {
        this.fetchFiltersData();
      }
    }
    fetchFiltersData = () => {
      const { filters, datasource } = this.props;
      console.log(filters);
      let request = createRequestMaker(datasource, { type: "filters" });
      filters.forEach((item, i) => {
        if (i === 0)
          request(item.itemKey).then((req) => {
            console.log(req);
            console.log(new Date());
          });
      });
    };
    render() {
      return <Component />;
    }
  }
  const mapStateToProps = (state, ownProps) => {
      return {
        filters: getFilters(state, ownProps),
        filterKeys: getFilterKeys(state, ownProps),
        ...getDatasourceData(state, ownProps),
      };
    },
    mapDispatchToProps = (dispatch, ownProps) => ({
      ...createDispatchers(dispatch, {
        itemKey: ownProps.datasource,
        type: "Datasource",
      }),
    });
  DatasourceHandler = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DatasourceHandler);
  DatasourceHandler.whyDidYouRender = true;
  return DatasourceHandler;
};

export default withDatasourceHandler;

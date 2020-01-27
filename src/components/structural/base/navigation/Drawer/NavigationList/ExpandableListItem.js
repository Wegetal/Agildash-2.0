import React from "react";
import { ListItem, Collapse, Icon } from "@material-ui/core";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 14-01-2020
 */
class ExpandableListItem extends React.PureComponent {
  state = {
    open: false
  };
  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };
  render() {
    const { open } = this.state;
    const { drawerOpen, routes, label } = this.props;
    return (
      <React.Fragment>
        <Collapse in={drawerOpen}>
          <ListItem onClick={this.handleClick} button>
            {label}
          </ListItem>
        </Collapse>
        {!drawerOpen && open ? (
          routes.map(item => (
            <ListItem key={item.icon} button>
              <Icon>{item.icon}</Icon>
            </ListItem>
          ))
        ) : (
          <Collapse in={open}>
            {routes.map(item => {
              return (
                <div key={item.route}>
                  <Icon>{item.icon}</Icon>
                  {item.route}
                </div>
              );
            })}
          </Collapse>
        )}
      </React.Fragment>
    );
  }
}

export default ExpandableListItem;

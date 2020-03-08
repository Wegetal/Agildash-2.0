import React from "react";
import {
  Drawer,
  Icon,
  withStyles,
  MenuList,
  MenuItem,
  Divider,
  Tooltip,
  Badge,
  Select,
  InputBase,
  IconButton
} from "@material-ui/core";
import classNames from "classnames";
import styles from "./styles";
import logo from "./logo.png";
import ExpandableListItem from "./NavigationList/ExpandableListItem";

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class SideDrawer extends React.PureComponent {
  render() {
    const {
      classes,
      isMobile,
      hidden,
      open,
      handleOpen,
      groupedRoutes,
      handleRoute
    } = this.props;
    return (
      <React.Fragment>
        <Drawer
          PaperProps={{
            classes: {
              root: classNames(classes.drawer, classes.drawerClose, {
                isMobile: isMobile,
                hidden: hidden,
                [classes.drawerOpen]: open
              })
            }
          }}
          variant="permanent"
        >
          <MenuList>
            <Tooltip placement="right" title="Sobre">
              <MenuItem className={classes.item}>
                <img alt="" src={logo}></img>
              </MenuItem>
            </Tooltip>
            <Divider light className={classes.divider} />
            {Object.keys(groupedRoutes).map(groupLabel => (
              <ExpandableListItem
                key={groupLabel}
                label={groupLabel}
                drawerOpen={open}
                routes={groupedRoutes[groupLabel]}
                handleRoute={handleRoute}
              />
            ))}
            <Tooltip placement="right" title={"Idioma"}>
              <MenuItem className={classNames(classes.item, classes.noPad)}>
                <Select
                  classes={{ icon: classes.selectIcon }}
                  className={classes.selectContainer}
                  value="Pt"
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "top",
                      horizontal: "right"
                    },
                    getContentAnchorEl: null
                  }}
                  SelectDisplayProps={{ className: classes.select }}
                  renderValue={value => (
                    <div>
                      <Badge
                        classes={{ badge: classes.badge }}
                        color="error"
                        badgeContent={value}
                      >
                        <Icon className={classes.icon}>translate</Icon>
                      </Badge>
                      {open && <span className={classes.text}>{value}</span>}
                    </div>
                  )}
                  input={<InputBase type="" />}
                >
                  <MenuItem value={"Pt"}>Portugues</MenuItem>
                </Select>
              </MenuItem>
            </Tooltip>
            <Tooltip placement="right" title={"Logout"}>
              <MenuItem className={classes.item}>
                <Icon>exit_to_app</Icon>
                {open && <span className={classes.text}>Sair</span>}
              </MenuItem>
            </Tooltip>
            <Divider light className={classes.divider} />
          </MenuList>
          <div className={classes.latestItem}>
            <IconButton onClick={handleOpen}>
              <Icon
                className={classNames(classes.icon, {
                  [classes.rotateIn]: open,
                  [classes.rotateOut]: !open
                })}
              >
                keyboard_arrow_right
              </Icon>
            </IconButton>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SideDrawer);

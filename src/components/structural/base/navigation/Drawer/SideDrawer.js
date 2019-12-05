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

/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 01-11-2019
 */
class SideDrawer extends React.PureComponent {
  render() {
    const { classes, isMobile, active, open, handleOpen } = this.props;
    return (
      <React.Fragment>
        <Drawer
          PaperProps={{
            classes: {
              root: classNames(classes.drawer, classes.drawerClose, {
                isMobile: isMobile,
                active: !active,
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
            {[
              {
                title: "Conta",
                icon: <Icon>person</Icon>,
                content: (
                  <React.Fragment>
                    <Icon>person</Icon>
                    <span className={classes.text}>teste</span>
                  </React.Fragment>
                ),
                noPad: true,
                onClick: () => console.log("T")
              },
              {
                title: "Notificações",
                icon: <Icon>email</Icon>,
                content: (
                  <React.Fragment>
                    <Icon>email</Icon>
                    <span className={classes.text}>teste</span>
                  </React.Fragment>
                ),
                noPad: true,
                onClick: () => console.log("T")
              },
              {
                component: (
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
                          {open && (
                            <span className={classes.text}>{value}</span>
                          )}
                        </div>
                      )}
                      input={<InputBase type="" />}
                    >
                      <MenuItem value={"Pt"}>Portugues</MenuItem>
                    </Select>
                  </MenuItem>
                ),
                title: "Idioma"
              },
              {
                title: "Logout",
                icon: <Icon>exit_to_app</Icon>,
                content: (
                  <React.Fragment>
                    <Icon>exit_to_app</Icon>
                    <span className={classes.text}>Sair</span>
                  </React.Fragment>
                )
              }
            ].map(({ title, content, icon, component }, i) => (
              <Tooltip placement="right" key={i} title={title}>
                {component ? (
                  component
                ) : (
                  <MenuItem className={classes.item}>
                    {open && content ? content : icon}
                  </MenuItem>
                )}
              </Tooltip>
            ))}

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

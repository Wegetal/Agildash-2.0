const styles = theme => ({
  drawerClose: {
    // maxWidth: "53px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 2,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 2
    },
    "&.isMobile.active": {
      width: 0
    }
  },
  drawerOpen: {
    width: theme.spacing(18),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawer: {
    background: "-webkit-linear-gradient(18deg, #6441a5, #2a0845)",
    // eslint-disable-next-line no-dupe-keys
    background: "linear-gradient(18deg, #6441a5, #2a0845)"
  },
  item: {
    justifyContent: "center",
    padding: "10px 8px",
    color: "white"
  },
  noPad: {
    padding: "0"
  },
  badge: {
    padding: "0px"
  },
  divider: {
    backgroundColor: "rgb(255,255,255, 0.08)",
    height: "2px"
  },
  select: {
    cursor: "pointer",
    color: "inherit",
    "&:focus": {
      outline: 0
    }
  },
  selectIcon: {
    display: "none"
  },
  selectContainer: {
    padding: "10px 8px",
    cursor: "pointer"
  },
  icon: {
    color: "white"
  },
  latestItem: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center"
  },
  rotateIn: {
    transform: "rotate(-180deg)",
    transition: "0.8s"
  },
  rotateOut: {
    transform: "rotate(360deg)",
    transition: "0.8s"
  },
  text: {
    marginLeft: "4px",
    color: "white"
  }
});

export default styles;

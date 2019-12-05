import React from "react";

const Logo = React.memo(props => {
  const { classes, src, alt, title } = props;
  return <img className={classes.logo} src={src} alt={alt} title={title} />;
});

export default Logo;

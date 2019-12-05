import React from "react";

class ErrorBoundary extends React.PureComponent {
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;

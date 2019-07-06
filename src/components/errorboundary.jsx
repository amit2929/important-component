import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, error: error });
  };
  render() {
    return <div>Something went wrong</div>;
  }
}

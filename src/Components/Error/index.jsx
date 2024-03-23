import React, { Component } from "react";
import "./index.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <div className={"error-page"}>
            <div className={"oops"}>Oops!</div>
            <div className={"error-message"}>Something went wrong...</div>
            <div>
              <button
                className={"retry-button"}
                onClick={() => window.location.reload()}
              >
                Try Again!
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

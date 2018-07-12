import React from 'react';

export default class ErrorHandeler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
        </h1>
      );
    }
    return this.props.children;
  }
}

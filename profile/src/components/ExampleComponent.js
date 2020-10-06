// this is an example of a class component
// you can also use function components: https://reactjs.org/docs/components-and-props.html#function-and-class-components
import React, { Component } from 'react';

class ExampleComponent extends Component {
  render() {
    return <h1>Hello World! I'm {this.props.name ? this.props.name : 'Code The Change YYC'}</h1>;
  }
}

export default ExampleComponent;
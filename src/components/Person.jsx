import React from 'react';

class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Stian',
      age: 27,
    };
  }

  handleIncrease() {
    this.setState({
      ...this.state,
      age: this.state.age + 1,
    });
  }

  handleDecrease() {
    this.setState({
      ...this.state,
      age: this.state.age - 1,
    });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <br />
        <button onClick={() => this.handleIncrease()}>Increase Age +</button>
        <br />
        <button onClick={() => this.handleDecrease()}>Decrease Age -</button>
      </div>
    );
  }
}

export default Person;

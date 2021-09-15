import React, { Component } from 'react';

/*
1. A setState ossze mergeli az elozo stattel, szoval nem csapja felul a tobbi fieldet 
2. Nem szabad direktben hivatkozni a this.state-re es this.props-ra a setState-ben,
 mert async modon valtozhatnak

*/

interface IState {
  name: string;
  friends: number;
}

interface IProps {
  increment: number;
}

export class ClassWithState extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'David',
      friends: 0
    };
  }

  handleClick() {
    this.setState({ name: 'Bela' });
  }

  handleAddFrined() {
    this.setState((state, props) => ({
      friends: state.friends + props.increment
    }));
  }

  render() {
    return (
      <p>
        Name: {this.state.name}
        <br />
        Friends: {this.state.friends}
        <br />
        <button onClick={this.handleClick.bind(this)}>Change Name</button>
        <button onClick={() => this.handleAddFrined()}>Add friends</button>
      </p>
    );
  }
}

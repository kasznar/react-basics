import React, { Component } from 'react';

interface IProps {
  name: string;
  jobTitle: string;
  workHours: number;
}

export class ClassWithProps extends Component<IProps> {
  render() {
    return (
      <p>
        <span>Name: {this.props.name}</span>
        <br />
        <span>Job title: {this.props.jobTitle}</span>
        <br />
        <span>Work hours: {this.props.workHours}</span>
      </p>
    );
  }
}

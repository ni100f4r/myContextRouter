import React, { Component, Children } from "react";
import Switch from "./Switch";

export class Toggle extends Component {
  static On = (props) => (props.on ? props.Children : null);
  static Off = (props) => (!props.on ? props.Children : null);
  static Button = (props) => (
    <Switch on={props.on} onClick={props.toggle} {...props}></Switch>
  );

  state = {
    on: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    return this.props.children;
  }
}

export default Toggle;

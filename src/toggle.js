import React, { Component, Children } from "react";
import Switch from "./Switch";

const ToggleContext = React.createContext();

export class Toggle extends Component {
  // static On = (props) => (props.on ? props.children : null);
  // static Off = (props) => (!props.on ? props.children : null);
  // static Button = ({ on, toggle, ...props }) => (
  //   <Switch on={on} onClick={toggle} {...props}></Switch>
  // );
  //***********  Context ***********/
  static On = (props) => {
    return (
      <ToggleContext.Consumer>
        {(value) => (value.on ? props.children : null)}
      </ToggleContext.Consumer>
    );
  };
  static Off = (props) => {
    return (
      <ToggleContext.Consumer>
        {(value) => (!value.on ? props.children : null)}
      </ToggleContext.Consumer>
    );
  };

  static Button = (props) => {
    return (
      <ToggleContext.Consumer>
        {(value) => (
          <Switch on={value.on} onClick={value.toggle} {...props}></Switch>
        )}
      </ToggleContext.Consumer>
    );
  };

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
    // return React.Children.map(this.props.children, (child) =>
    //   React.cloneElement(child, {
    //     on: this.state.on,
    //     toggle: this.toggle,
    //   })
    // );
    //***********  Context ***********/
    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, toggle: this.toggle }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default Toggle;

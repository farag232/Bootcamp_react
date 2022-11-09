import React from "react";
import "./Button.css";
export default class Button extends React.Component {
  render() {
    return (
      <button className={this.props.color} onClick={() => this.props.handleClick(this.props.color)}>
        <h2>{this.props.color}</h2>
      </button>
    );
  }
}
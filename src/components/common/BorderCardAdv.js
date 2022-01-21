import React, { Component } from "react";

class BorderCardAdv extends Component {
  state = {
    hover: false,
  };

  onMouseEnter = () => {
    if (this.props.hoverable) {
      this.setState({
        hover: true,
      });
    }
  };

  onMouseLeave = () => {
    if (this.props.hoverable) {
      this.setState({
        hover: false,
      });
    }
  };

  render() {
    let className = "card";
    if (this.props.className)
      className = `${className} ${this.props.className}`;
    return (
      <div
        className={className}
        style={
          this.state.hover || this.props.hover
            ? {
                ...myStyle.card,
                ...myStyle.hover,
                ...this.props.style,
                overflow: "hidden",
              }
            : {
                ...myStyle.card,
                ...myStyle.noHover,
                ...this.props.style,
                overflow: "hidden",
              }
        }
        onClick={this.props.onClick}
        onMouseEnter={this.props.selfHover ? this.onMouseEnter : null}
        onMouseLeave={this.props.selfHover ? this.onMouseLeave : null}
      >
        {this.props.children}
      </div>
    );
  }
}

const myStyle = {
  card: {
    border: "1px solid #171717",
    borderRadius: 5,
    marginBottom: 25,
    padding: "0 8px",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#f7f7f7",
  },
  noHover: {
    boxShadow: "1px 1px 20px rgba(91, 91, 91, 0.5)",
    transition: "box-shadow .5s",
  },
  hover: {
    boxShadow: "1px 1px 20px rgba(91, 91, 91, 0.25)",
    transition: "box-shadow .5s",
  },
};

export default BorderCardAdv;

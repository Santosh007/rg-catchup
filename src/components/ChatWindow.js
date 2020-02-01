import React from "react";
import MessageView from "./MessageView";
import "../styles/components.css";

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgtext: "",
      messages: [
        { content: "Santosh message kalsiddu", type: "sent" },
        { content: "Paapu message kalsiddu", type: "received" },
        { content: "Santosh message kalsiddu", type: "sent" },
        { content: "Paapu message kalsiddu", type: "received" }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handleClick() {
    this.setState({
      msgtext: "",
      messages: [
        ...this.state.messages,
        { content: this.state.msgtext, type: "sent" }
      ]
    });
  }

  updateInputValue(e) {
    this.setState({
      msgtext: e.target.value
    });
  }

  render() {
    return (
      <div className="cw-container">
        <MessageView messages={this.state.messages} />
        <div className="msg-input">
          <input
            className="msg-input-txt"
            type="text"
            name="Message"
            value={this.state.msgtext}
            onChange={this.updateInputValue}
          />
          <button className="msg-input-btn" onClick={this.handleClick}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

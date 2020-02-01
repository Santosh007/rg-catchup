import React from "react";
import "../styles/components.css";

export default class MessageView extends React.Component {
  render() {
    return (
      <ul id="style-8" className="msg-view">
        {this.props.messages.map(message => (
          <li className={message.type}>{message.content}</li>
        ))}
      </ul>
    );
  }
}

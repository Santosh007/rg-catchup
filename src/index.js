import React from "react";
import { render } from "react-dom";
import ChatWindow from "./components/ChatWindow";
import "./styles/main.css";

/*
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
*/

const App = () => (
  <div className="container">
    <header className="main-header">Grid Layout</header>
    <nav className="opt-nav">Options</nav>
    <main className="content">
      <ChatWindow />
    </main>
    <aside className="buddies">Buddies</aside>
    <footer className="main-footer">Layout footer</footer>
  </div>
);

render(<App />, document.getElementById("root"));

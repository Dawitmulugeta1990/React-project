import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
export default class App extends Component {
  state = {
    comment: "",
  };
  render() {
    return (
      <div>
        <form action="">
          Comment:
          <input type="text" placeholder="comment" className="input-text" />
          <input
            type="submit"
            value="(+) add comment"
            className="input-button"
          />
        </form>
      </div>
    );
  }
}

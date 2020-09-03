import React, { Component } from "react";
export default class PostListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };
  }
  onChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  onClick = (e) => {
    e.preventDefault();
    this.props.handleComment(this.state.comment);
    this.setState({
      comment: "",
    });
    console.log(this.state.comment);
  };

  render() {
    return (
      <div>
        <div style={styleHeader}>
          <button
            style={styleButton}
            onClick={() => this.props.handleDelete(this.props.post.id)}
          >
            X
          </button>
          <h2>{this.props.post.title}</h2>
        </div>
        <div style={stylePicture}>
          <div>
            <img src={this.props.post.image} alt="Picture here" />
          </div>
          <ul>
            {this.props.post.comments.map((comment) => {
              return <li>{comment.comment}</li>;
            })}
          </ul>
          <form action="">
            Comment
            <input
              style={styleInput}
              type="text"
              value={this.state.comment}
              placeholder="comment"
              className="input-text"
              onChange={this.onChange}
            />
            <input
              type="button"
              value=" (+) add comment"
              className="input-button"
              onClick={this.onClick}
            />
          </form>
        </div>
      </div>
    );
  }
}
const styleHeader = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
};

const styleButton = {
  height: 25,
  margin: "0 0 0 10px",
};
const stylePicture = {
  margin: "0px 0px 30px 50px ",
};
const styleInput = {
  margin: "0px 5px 0px 5px ",
  width: "200px",
};

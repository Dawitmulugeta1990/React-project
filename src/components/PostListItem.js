import React from "react";

function PostListItem(props) {
  return (
    <div>
      <div style={styleHeader}>
        <button style={styleButton}>X</button>
        <h2>{props.post.title}</h2>
      </div>
      <div style={stylePicture}>
        <div>
          <img src={props.post.image} alt="Picture here" />
        </div>
        Comment:
        <input
          style={styleInput}
          type="text"
          placeholder="comment"
          className="input-text"
        />
        <input
          type="submit"
          value=" (+) add comment"
          className="input-button"
        />
      </div>
    </div>
  );
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

export default PostListItem;

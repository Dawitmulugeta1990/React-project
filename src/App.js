import React, { Component } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import { v4 as uuidv4 } from "uuid";
export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "The Perfect Date",
        image: "https://s3.amazonaws.com/learn-verified/perfectDate.png",
        comments: [],
      },
      {
        id: 2,
        title: "Back-end v. Front-end",
        image: "https://s3.amazonaws.com/learn-verified/backVFront.jpg",
        comments: [],
      },
      {
        id: 3,
        title: "Good Programmer",
        image: "https://s3.amazonaws.com/learn-verified/goodProgrammer.png",
        comments: [],
      },
      {
        id: 4,
        title: "Need Snek",
        image: "https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg",
        comments: [],
      },
      {
        id: 5,
        title: "Risky Captcha",
        image:
          "https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg",
        comments: [],
      },
      {
        id: 6,
        title: "Amazon Sync Loader",
        image: "https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif",
        comments: [],
      },
      {
        id: 7,
        title: "Just Kidding",
        image: "https://s3.amazonaws.com/learn-verified/woopsNevermind.png",
        comments: [],
      },
      {
        id: 8,
        title: "Assembly v. The World",
        image: "https://s3.amazonaws.com/learn-verified/divideBy10.png",
        comments: [],
      },
      {
        id: 9,
        title: "WaffleBoard",
        image: "https://s3.amazonaws.com/learn-verified/waffleBoard.png",
        comments: [],
      },
      {
        id: 10,
        title: "The Bat Strikes Again",
        image: "https://s3.amazonaws.com/learn-verified/NaNx10Batman.png",
        comments: [],
      },
    ],
  };
  handleDelete = (id) => {
    this.setState({
      posts: [
        ...this.state.posts.filter((post) => {
          return post.id !== id;
        }),
      ],
    });
  };
  handleComment = (id, comment) => {
    const newComment = {
      id: uuidv4(),
      list: comment,
    };
    this.setState({
      posts: this.state.posts.map((post) => {
        if (post.id === id) {
          post.comments.push(newComment);
        }
        return post;
      }),
    });
  };
  render() {
    return (
      <div>
        <Header />
        <PostList
          posts={this.state.posts}
          handleDelete={this.handleDelete}
          handleComment={this.handleComment}
        />
      </div>
    );
  }
}

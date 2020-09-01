import React, { Component } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "The Perfect Date",
        image: "https://s3.amazonaws.com/learn-verified/perfectDate.png",
      },
      {
        id: 2,
        title: "Back-end v. Front-end",
        image: "https://s3.amazonaws.com/learn-verified/backVFront.jpg",
      },
      {
        id: 3,
        title: "Good Programmer",
        image: "https://s3.amazonaws.com/learn-verified/goodProgrammer.png",
      },
      {
        id: 4,
        title: "Need Snek",
        image: "https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg",
      },
      {
        id: 5,
        title: "Risky Captcha",
        image:
          "https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg",
      },
      {
        id: 6,
        title: "Amazon Sync Loader",
        image: "https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif",
      },
      {
        id: 7,
        title: "Just Kidding",
        image: "https://s3.amazonaws.com/learn-verified/woopsNevermind.png",
      },
      {
        id: 8,
        title: "Assembly v. The World",
        image: "https://s3.amazonaws.com/learn-verified/divideBy10.png",
      },
      {
        id: 9,
        title: "WaffleBoard",
        image: "https://s3.amazonaws.com/learn-verified/waffleBoard.png",
      },
      {
        id: 10,
        title: "The Bat Strikes Again",
        image: "https://s3.amazonaws.com/learn-verified/NaNx10Batman.png",
      },
    ],
  };
  render() {
    return (
      <div>
        <Header />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

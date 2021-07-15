import React, { Component } from "react";
import Intro from "../assets/white-bg.jpg";
import Timeline from "./Components/timeline";

export default class Main extends Component {
  render() {
    return (
      <div className="container ps-relative">
        <section className="intro">
          <Timeline />
          <img alt="timeline-item" src={Intro} />
          <div className="blur"></div>
          <div className="ps-relative">
            <label>S Ahammed Shaqil</label>
            <label>I'm a web developer</label>
          </div>
        </section>
      </div>
    );
  }
}

import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className="header">
      <section className="hero-container">
        <div className="center-image">
          <img
            alt=""
            className="logo-img"
            src="https://zuri.team/img/zuri-logo-full.svg"
          />
        </div>

        <div className="hero">
          <h2>Learn, Build, Grow.</h2>
          <p>
            Unlock your Brilliance with our hands-on{" "}
            <a href="/">beginner</a> and{" "}
            <a href="/">expert training</a>. Zuri
            Team has been immensely successful in creating a global network of a
            highly adept intelligent workforce that can help your company
            achieve their mission-critical{" "}
            <a href="/">projects and goals</a>
          </p>
          <div className="btn-div">
            <a href="/">
              <button className=" my-btn btn-red">I'm new to the Industry</button>
            </a>
            <br className="d-block d-md-none" />
            <a href="/">
              <button class=" my-btn btn-red-outline">
                I need industry experience
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default header
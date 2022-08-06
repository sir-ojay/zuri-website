import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className="header">
      <section class="hero-container">
        <div class="center-image">
          <img
            alt=""
            class="logo-img"
            src="https://zuri.team/img/zuri-logo-full.svg"
          />
        </div>

        <div class="hero">
          <h2>Learn, Build, Grow.</h2>
          <p>
            Unlock your Brilliance with our hands-on{" "}
            <a href="https://training.zuri.team">beginner</a> and{" "}
            <a href="https://internship.zuri.team">expert training</a>. Zuri
            Team has been immensely successful in creating a global network of a
            highly adept intelligent workforce that can help your company
            achieve their mission-critical{" "}
            <a href="https://talent.zuri.team">projects and goals</a>
          </p>
          <div class="btn-div">
            <a href="https://training.zuri.team/">
              <button class=" my-btn btn-red">I'm new to the Industry</button>
            </a>
            <br class="d-block d-md-none" />
            <a href="https://talent.zuri.team/">
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
import React from "react";
import "./article.css";


const article = () => {
  return (
    <div className="wrapper">
      <div className="team">
        <h2>BY ZURI Team</h2>
        <p>We cater for every level of expertise and needs in the industry.</p>
      </div>
      <div className="article">
        <div className="art1">
          <div>
            <img src="https://zuri.team/img/zuri-training-img.svg" alt="" />
          </div>
          <div>
            <p className="artpage">
              We understand a complete beginner cannot become a professional
              after a few weeks, the aim here is to get familiar enough with
              each of the tools such that you'll be able to continue learning on
              your own with minimal support.
            </p>
          </div>
          <div className="artLink">
            <a href="/">I want to be trained &gt;</a>
          </div>
        </div>

        <div className="art2">
          <div>
            <img src="https://zuri.team/img/zuri-internship-img.svg" alt="" />
          </div>
          <div>
            <p className="artpage">
              We place you in a work simulation. We give you tasks every week,
              the tasks ranges from easy to hard as you progress from stage to
              stage, making it to the final stage means you are ready for actual
              work.
            </p>
          </div>
          <div className="artLink">
            <a href="/">I want to join the internship &gt;</a>
          </div>
        </div>

        <div className="art3">
          <div>
            <img src="https://zuri.team/img/zuri-talent-img.svg" alt="" />
          </div>
          <div>
            <p className="artpage">
              Keeping pace with projects and being on the look out for the
              extremely talented individuals has become ever more challenging.
              Here is where Zuri Team comes into play to bring the best suited
              talent for your company.
            </p>
          </div>
          <div className="artLink">
            <a href="/">I am looking for talent &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default article;

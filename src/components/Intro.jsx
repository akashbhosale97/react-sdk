import React from "react";
import "./intro.css";

const Intro = ({ data }) => {
  console.log(data);
  return data.length !== 0 ? (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h2 className="intro__intro">{data.left.hello}</h2>
          <h1 className="intro__name">{data.left.name}</h1>
          <div className="intro__title">
            <div className="intro__title__wrapper">
              <div className="intro__title__item">{data.left.title.title1}</div>
              <div className="intro__title__item">{data.left.title.title2}</div>
              <div className="intro__title__item">{data.left.title.title3}</div>
            </div>
          </div>
          <div className="intro__desc">{data.desc}</div>
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__bg"></div>
        <img src={data.right.img.url} alt="me" className="intro__img" />
      </div>
    </div>
  ) : (
    "loading"
  );
};

export default Intro;

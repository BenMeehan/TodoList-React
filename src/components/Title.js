import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1
        className="ui violet header"
        style={{ fontFamily: "cursive", fontSize: "3rem" }}
      >
        {props.title}
      </h1>
      <h2
        className="ui sub header purple"
        style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
      >
        {props.subTitle}
      </h2>
    </div>
  );
};

export default Title;

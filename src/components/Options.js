import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && (
        <p
          className="ui sub header red"
          style={{ fontSize: "20px", paddingTop: "1%" }}
        >
          Please enter something to get started!
        </p>
      )}
      <button
        onClick={props.handleRemoveAll}
        className="ui button grey"
        style={{ margin: "2%" }}
      >
        Remove all
      </button>
      <div style={{ margin: "2%" }}>
        {props.options.map((option) => {
          return (
            <Option
              key={option}
              option={option}
              optionToRemove={props.handleRemoveOption}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Options;

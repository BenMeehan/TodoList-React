import React from "react";

const Option = (props) => {
  return (
    <div className="ui segment" style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div className="ui grid left aligned">
        <div
          className="item eleven wide column"
          style={{
            fontSize: "20px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <i className="thumbtack icon"></i>
          <p style={{ display: "inline", padding: "2%" }}>{props.option}</p>
        </div>
        <div className="five wide column right aligned">
          <button
            onClick={() => {
              props.optionToRemove(props.option);
            }}
            className="ui green basic button compact"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;

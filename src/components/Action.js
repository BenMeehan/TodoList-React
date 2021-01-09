import React from "react";

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleRandom}
        disabled={!props.hasOptions}
        className="ui teal button"
        style={{ marginTop: "3%", marginBottom: "1%" }}
      >
        Random Task
      </button>
    </div>
  );
};

export default Action;

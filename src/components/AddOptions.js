import React from "react";

class AddOptions extends React.Component {
  state = {
    error: undefined,
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.entered_value.value.trim();
    const msg = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: msg,
      };
    });
    if (!msg) {
      e.target.elements.entered_value.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p style={{ fontSize: "20px", color: "red" }}>{this.state.error}</p>
        )}
        <form
          action=""
          onSubmit={this.handleFormSubmit}
          className="ui small form"
        >
          <input type="text" name="entered_value" className="six wide field" />
          <button
            type="submit"
            className="ui pink button"
            style={{ marginLeft: "1%" }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddOptions;

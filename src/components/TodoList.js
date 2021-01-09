import React from "react";

import AddOptions from "./AddOptions";
import Title from "./Title";
import Action from "./Action";
import Options from "./Options";

class TodoList extends React.Component {
  state = {
    options: [],
  };
  handleRemoveAll = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  handleRandom = () => {
    const r = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[r]);
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter something to add.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists!";
    }
    this.setState((prevState) => {
      return {
        options: [...prevState.options, option],
      };
    });
  };

  handleRemoveOption = (optionToRemove) => {
    this.setState(() => {
      const new_options = this.state.options.filter((option) => {
        return optionToRemove !== option;
      });
      return {
        options: new_options,
      };
    });
  };

  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => {
        return {
          options: options,
        };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const title = "ToDo List";
    const subTitle = "Destroy your dilemma";
    return (
      <div>
        <Title title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length}
          handleRandom={this.handleRandom}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default TodoList;

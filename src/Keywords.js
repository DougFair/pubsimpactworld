import React, { Component } from "react";

class Keywords extends Component {
  state = {
    keyword: "",
  };

  selectKeyword = (val) => {
    this.setState({ keyword: val });
    this.props.handleKeywordChange(val);
  };

  render() {
    let { keyword } = this.state;

    return (
      <div>
        <input
          type="text"
          name="keyword"
          value={keyword}
          onChange={this.selectKeyword}
        />
      </div>
    );
  }
}

export default Keywords;

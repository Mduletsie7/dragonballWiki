import React, { Component } from "react";
import '../Subscribe.css'

class Subscribe extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div className="subscribe">
            <div className="form">
            <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Subscribe" />
      </form>
            </div>
        </div>
    );
  }
}

export default Subscribe
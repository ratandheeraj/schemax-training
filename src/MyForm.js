import React from "react";
import {Component} from "react";

export default class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.temp = [];
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      this.temp.push(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          {console.log(this.state.temp)}
        </form>
      );
    }
  }
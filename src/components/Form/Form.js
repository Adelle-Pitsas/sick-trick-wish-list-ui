import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitTrick = (state) => {
    this.props.addTrick(state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      stance: "",
      name: "",
      obstacle: "",
      tutorial: ""
    })
  }




  render() {
    return(
      <div className="form">
        <select 
          name="stance"
          onChange={event => this.handleChange(event)}
          value={this.state.stance}
          >
            <option>Choose your Stance</option>
            <option>Regular</option>
            <option>Switch</option>
          </select>
          <input 
            type="text"
            placeholder="Name of Trick"
            name="name"
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <select 
           name="obstacle"
           onChange={event => this.handleChange(event)}
           value={this.state.stance}
           >
            <option>Choose your Obstacle</option>
            <option>Flatground</option>
            <option>Ledge</option>
            <option>Rail</option>
            <option>Stairs</option>
            <option>Pool</option>
          </select>
          <input 
            type="text"
            placeholder="Link to Tutorial"
            name="tutorial"
            value={this.state.tutorial}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={() => this.submitTrick(this.state)}>Just gonna send it!</button>
          
      </div>
    )
  }
}


export default Form
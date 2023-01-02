import { Component } from 'react';
import './App.css';
import { fetchTricks } from '../../apiCalls'
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetchTricks()
    .then(data => {
      this.setState({tricks: data})
    })
  }

  addTrick = (trick) => {
    this.setState({tricks: [...this.state.tricks, trick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
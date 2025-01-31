import { Component } from 'react';
import './App.css';
import { fetchTricks, postTrick, deleteTrick } from '../../apiCalls'
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
    postTrick(trick)
    .then(data => {
      this.setState({tricks: [...this.state.tricks, data]})
    })
  }

  removeTrick = (id) => {
    deleteTrick(id)
    .then(data => this.setState({tricks: data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks} removeTrick={this.removeTrick}/>
      </div>
    );
  }
}

export default App;
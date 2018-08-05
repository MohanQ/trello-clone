import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: null
    }
  }

  getStaticData() {
    var data = require('../../testData.json');
    this.setState({
      boards: data
    });
  }

  fetchData() {
    fetch('http://localhost:3200/board/all')
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          boards: res
        });
      })
      .catch(err => console.log(err)); 
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { boards } = this.state;
    console.log(boards);
    if (!boards) {

      return <div>Loading... </div>;
    }
    return (
      <div className="App">
        <Board columns={boards[0].columns}>
        </Board>
      </div>
    );
  }
}

export default App;

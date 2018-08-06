import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';
import Modal from '../../components/Modal/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: null,
      isOpen: false
    }
  }

  getStaticData() {
    var data = require('../../testData.json');
    let currState = this.state;
    currState.boards = data;
    this.setState(currState);
  }

  toogleModal = () => {
    console.log("toogle...");
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state);
  }

  fetchData() {
    fetch('http://localhost:3200/board/all')
      .then(res => {
        return res.json();
      })
      .then(res => {
        let currState = this.state;
        currState.boards = res;
        this.setState(currState);
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
        {/* <button onClick={this.toogleModal}>Open the modal</button> */}

        <Board columns={boards[0].columns} boardId={boards[0]._id}>
        </Board>


        <Modal show={this.state.isOpen} onClose={this.toogleModal}>
          
        </Modal>
      </div>

    );
  }
}

export default App;

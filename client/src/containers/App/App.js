import React, { Component } from "react";
import "./App.css";
import Board from "../Board/Board";
import Modal from "../../components/Modal/Modal";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: null
    };
  }

  getStaticData() {
    var data = require("../../testData.json");
    let currState = this.state;
    currState.boards = data;
    this.setState(currState);
  }

  toogleModal = () => {
    console.log("toogle...");
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state);
  };

  fetchData() {
    fetch("http://localhost:3200/board/all")
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
    this.getStaticData();
  }

  render() {
    const { boards } = this.state;
    console.log("App's render is calling!");
    if (!boards) {
      return <div>Loading... </div>;
    }
    return (
      <div className="App">
        <Board columns={boards[0].columns} boardId={boards[0]._id} />

        <Modal show={this.props.isOpen}>
          <button className="btn btn-danger">Reeeed</button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(
    "App.js mapStateToProps is called! With parameter state: ",
    state
  );
  return {
    isOpen: state.isOpen
  };
};

export default connect(
  mapStateToProps,
  null
)(App);

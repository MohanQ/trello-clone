import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { changeModalState } from "../../actions";

class Card extends React.Component {
  render() {
    const { card } = this.props;

    return (
      <div
        className="card-title bg-washed-blue br2 pa1 dim"
        onClick={this.props.onClickCard}
      >
        <p>{card.displayName}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickCard: () => dispatch(changeModalState(true))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);

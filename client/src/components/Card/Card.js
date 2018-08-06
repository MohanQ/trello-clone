import React from 'react'
import './Card.css'

class Card extends React.Component {

    handleOnClick = () => {

    }

    render() {
        const { card } = this.props;

        return (
            <div className="card-title bg-washed-blue br2 pa1 dim" onClick={this.handleOnClick}>
                <p>{card.displayName}</p>
            </div>
        );
    }
}

export default Card;
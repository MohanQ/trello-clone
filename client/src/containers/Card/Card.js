import React from 'react'
import './Card.css'

class Card extends React.Component {

    render() {
        const { card } = this.props;

        return (
            <div className="card-title bg-washed-blue br2 pa1 dim">
                <p>{card.displayName}</p>
            </div>
            );
    }
}

export default Card;
import React from 'react'

class Card extends React.Component {

    render() {
        const { card } = this.props;

        return (
            <div className="bg-washed-blue br2 pa1 dim">
                <p>{card.displayName}</p>
            </div>
            );
    }
}

export default Card;
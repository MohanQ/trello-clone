import React from 'react'
import Card from '../Card/Card'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            column: this.props.column
        }
    }

    handleClick = () => {
        this.addNewCard();
    }


    addNewCard() {
        let card = { displayName: "Új kártya2", description: "Desc..." };
        fetch('http://localhost:3200/card/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                boardId: this.props.boardId,
                columnId: this.props.column._id,
                card: card
            })
        })
            .then(res => res.json())
            .then(res => {
                let currState = this.state;
                currState.column.cards.push(res);
                this.setState(currState);
            }).catch(err => console.error(err));

    }


    render() {
        const { column } = this.state;

        return (
            <div className="bg-lightest-blue br1 fl w-20 pa3 ma2">
                <h3 className="tl">{column.displayName}</h3>
                {column.cards.map(
                    card => {
                        return (
                            <div>
                                <Card card={card} >
                                </Card>
                                <br />
                            </div>)
                    })
                }
                <button onClick={this.handleClick}>Add new card</button>
            </div>
        )
    }
}

export default List;
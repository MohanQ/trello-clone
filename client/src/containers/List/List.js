import React from 'react'
import Card from '../Card/Card'
import NewCard from '../../components/NewCard/NewCard'

class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actualCards: this.props.column.cards
        }
    }

    finishedAddNewCard = (card) => {
        let currState = this.state;
        currState.actualCards.push(card);
        this.setState(currState);
    }

    render() {
        const { column } = this.props;

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
                <NewCard boardId={this.props.boardId} columnId={this.props.column._id} finishAddNewCardCallback={this.finishedAddNewCard}></NewCard>
            </div>
        )
    }
}

export default List;
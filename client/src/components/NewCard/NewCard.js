import React from 'react'

class NewCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            underCreating: false,
            cardTitle: undefined
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    setUnderCreating(value) {
        let currState = this.state;
        currState.underCreating = value;
        this.setState(currState);
    }

    handleAddAnotherCard = () => {
        this.setUnderCreating(true);
    }

    handleAddCard = () => {
        this.addNewCard();
    }

    handleCancel = () => {
        this.setUnderCreating(false);
    };

    handleChangeTitle(event) {
        let currState = this.state;
        currState.cardTitle = event.target.value;
        this.setState(currState);
    }

    addNewCard() {
        let card = { displayName: this.state.cardTitle, description: "Desc..." };
        fetch('http://localhost:3200/card/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                boardId: this.props.boardId,
                columnId: this.props.columnId,
                card: card
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setUnderCreating(false);
                this.props.finishAddNewCardCallback(res);
                //TODO: refresh column

                // let currState = this.state;
                // currState.column.cards.push(res);
                // this.setState(currState);
            }).catch(err => console.error(err));

    }

    render() {
        const { underCreating } = this.state;

        if (!underCreating)
            return (
                <button onClick={this.handleAddAnotherCard}> Add another card..</button>
            );
        return (
            <div>
                <textarea onChange={this.handleChangeTitle} placeholder="Enter a title for this card"></textarea>
                <br />
                <button onClick={this.handleAddCard}>Add card</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
}

export default NewCard;
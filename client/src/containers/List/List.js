import React from 'react'
import Card from '../Card/Card'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    handleClick = () => {
        this.addNewCard();
    }

    addNewCard() {
        let data = this.state.data;
        data.cards.push({ displayName: "NEW", description: "Desc..." });
        this.setState({
            data: data
        });
    }


    render() {
        const { data } = this.state;

        return (
            <div className="bg-lightest-blue br1 fl w-20 pa3 ma2">
                <h3 className="tl">{data.displayName}</h3>
                {data.cards.map(
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
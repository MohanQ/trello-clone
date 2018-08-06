import React from 'react'
import List from '../List/List'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { columns } = this.props;
        return (
            <div>
                {
                    columns.map(column => {
                        return (
                            <List
                                column={column} boardId={this.props.boardId}>
                            </List>);
                    })
                }
            </div>
        );
    }
}

export default Board;
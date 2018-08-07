import React from "react"

class CardEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });

    };

    handleSubmit = (event) => {

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="name-editor">Name</label>
                    <input className="form-control" type="text" id="name-editor" onChange={this.handleNameChange}></input>
                </div>
                <div className="form-group">
                    <label for="desc-editor">Description</label>
                    <textarea id="desc-editor" className="form-control" onChange={this.handleDescriptionChange}></textarea>
                </div>
            </form>
        )
    }
}

export default CardEditor;
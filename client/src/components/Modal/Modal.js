import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeModalState } from "../../actions";

//Based on: https://daveceddia.com/open-modal-in-react/
class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: 50
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: "#fff",
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: "0 auto",
            padding: 30
        };

        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}
                    <div className="footer">
                        <button onClick={this.props.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(changeModalState(false))
    };
};

Modal.propTypes = {
    // onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default connect(
    null,
    mapDispatchToProps
)(Modal);

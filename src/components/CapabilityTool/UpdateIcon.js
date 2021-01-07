import React, { Component, Fragment } from 'react'
import Modal from "react-modal";
import UpdateCapability from "./UpdateCapability";

const customStyles = {
    content: {
        height: "500px"
    }
};

class UpdateIcon extends Component {

    state = {
        modalIsOpen: false
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <Fragment>
                <i className="fas fa-user-edit ml-2" style={{ color: "blue" }} onClick={this.openModal} />
                <Modal isOpen={this.state.modalIsOpen} style={customStyles} ariaHideApp={false} >
                    <button 
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={this.closeModal}
                    >
                        <i className="far fa-times-circle mr-1" /> Close Modal
                    </button>
                    <UpdateCapability />
                </Modal>
            </Fragment>
        );
    }
}

export default UpdateIcon

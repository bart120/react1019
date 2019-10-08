import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class WarningModal extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        callback: PropTypes.func.isRequired
    }

    state = { show: true }

    onClick(choice) {
        this.props.callback(choice);
    }

    render() {
        return (
            <Modal show={true} onHide={() => this.onClick(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.props.message}</p>
                    {this.props.children}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={(event) => this.onClick(false)} variant="secondary">Non</Button>
                    <Button onClick={(event) => this.onClick(true)} variant="primary">Oui</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default WarningModal;
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import RoomService from '../../services/room-service';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AddRoom extends React.Component {

    //serv = new RoomService(); //remplacer par le reducer

    state = {
        pictures: [
            { id: 'Calliope.jpg', image: 'Calliope' },
            { id: 'Pegase.jpg', image: 'Pegase' },
            { id: 'Thalie.jpg', image: 'Thalie' },
            { id: 'Persee.jpg', image: 'Persee' }
        ],
        room: {}
    }

    submit = (event) => {
        event.preventDefault();
        this.props.serv.addRoom(this.state.room).then(data => {
            this.props.history.push('/rooms');
        });
    }

    onChange = (event) => {
        this.setState({ room: Object.assign(this.state.room, { [event.target.name]: event.target.value }) });
    }

    render() {
        return (
            <Form noValidate onSubmit={this.submit}>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="currency" name="price" onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombre de place</Form.Label>
                    <Form.Control type="number" name="seatCount" onChange={this.onChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control as="select" name="image" onChange={this.onChange}>
                        {this.state.pictures.map(p =>
                            (<option key={p.id} value={p.id}>{p.image}</option>)
                        )}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Enregistrer</Button>
            </Form>
        );
    }
}

const mapReducerStateToComponentProps = (stateStore) =>
    ({ serv: stateStore.roomService })

export default connect(mapReducerStateToComponentProps)(withRouter(AddRoom));
import React from 'react';
//import RoomService from '../../services/room-service';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import WarningModal from '../../components/warning-modal';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Loading from '../../components/animations/loading';

class ListRoom extends React.Component {
    state = {
        rooms: null,
        roomToDelete: null,
    }

    //serv = new RoomService();

    componentDidMount() {
        this.props.serv.getRooms()
            .then(data => {
                this.setState({ rooms: data });
            });
    }

    delete(room) {
        this.setState({ roomToDelete: room });
    }

    view(room) {
        this.props.history.push(`/room/${room.id}`);
    }

    confirmDelete = (choice) => {
        console.log(choice);
        if (choice) {
            this.props.serv.deleteRoom(this.state.roomToDelete.id).then(data => {
                let tab = this.state.rooms;
                tab.splice(tab.findIndex(x => x.id === data.id), 1);
                this.setState({ rooms: tab });
            });
        }
        this.setState({ roomToDelete: null });
    }

    render() {
        console.log(this.props);
        return (
            this.state.rooms ? (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Nombre de places</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rooms.map(room => (
                                <tr key={room.id}>
                                    <td>{room.name}</td>
                                    <td>{room.price}</td>
                                    <td>{room.seatCount}</td>
                                    <td>
                                        <Button onClick={(event) => this.view(room)}>Voir</Button>
                                        <Button onClick={(event) => this.delete(room)}>Suppr.</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {this.state.roomToDelete != null ? (
                        <WarningModal message={`Etes-vous sure de supprimer la salle ${this.state.roomToDelete.name}`} title="Question?" callback={this.confirmDelete}>
                            <div className="alert alert-warning">
                                {this.state.roomToDelete.name}
                            </div>
                        </WarningModal>
                    ) : ('')}
                </>
            ) : (<Loading />)
        );
    }
}

const mapReducerStateToComponentProps = (stateStore) =>
    ({ serv: stateStore.roomService })


export default connect(mapReducerStateToComponentProps)(withRouter(ListRoom));
import React from 'react';
//import RoomService from '../../services/room-service';
import { connect } from 'react-redux';

class DetailRoom extends React.Component {
    //serv = new RoomService();

    state = {
        room: null
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);
        this.props.serv.getById(this.props.match.params.id).then(data => this.setState({ room: data }));
    }

    render() {
        return (
            <>
                {this.state.room != null ? (
                    <p>{this.state.room.name}</p>
                ) : ('')}
            </>
        );
    }
}


const mapReducerStateToComponentProps = (stateStore) =>
    ({ serv: stateStore.roomService })

export default connect(mapReducerStateToComponentProps)(DetailRoom);
import { ROOM_SERVICE_ACTION } from "../actions/services-actions";
import RoomService from "../../services/room-service";

const INITIAL_STATE = {
    roomService: new RoomService()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOM_SERVICE_ACTION:
            if (state.roomService === null) {
                state.roomService = new RoomService();
            }
            break;
        default:
            break;
    }
    return state;
}
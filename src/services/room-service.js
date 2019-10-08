import BaseService from './base-service';

const URL_ROOMS = 'http://formation-roomy.inow.fr/api/rooms';


export default class RoomService extends BaseService {

    getRooms() {
        return this.get(URL_ROOMS);
    }

    deleteRoom(id) {
        return this.delete(`${URL_ROOMS}/${id}`);
    }
}
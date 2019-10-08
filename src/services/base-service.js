
import axios from 'axios';

export default class BaseService {

    get(url) {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    post(url, data) {
        return axios.post(url, data).then(this.promiseResolve).catch(this.promiseReject);
    }

    put(url, data) {
        return axios.put(url, data).then(this.promiseResolve).catch(this.promiseReject);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    promiseResolve(resp) {
        if (resp.status === 202) {
            return Promise.reject('La demande est introuvable');
        }

        return Promise.resolve(resp.data);
    }

    promiseReject(err) {
        return Promise.reject(err);
    }
}
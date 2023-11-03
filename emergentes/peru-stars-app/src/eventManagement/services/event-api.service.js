import http from '../../shared/service/http-common';

export class EventsApiService {
    getAll() {
        return http.get('/events');
    }

    getById(id) {
        return http.get(`/events/${id}`);
    }

    create(data) {
        return http.post('/events', data);
    }

    update(id, data) {
        return http.put(`/events/${id}`, data);
    }

    delete(id) {
        return http.delete(`/events/${id}`);
    }

    findByName(name) {
        return http.get(`/events?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/events?title=${lastName}`);
    }
}
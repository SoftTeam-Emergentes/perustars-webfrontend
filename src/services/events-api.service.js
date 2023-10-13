import http from './http-common';

class EventsApiService {
    getAllByArtistId(artistId) {
        return http.get(`/artists/${artistId}/events`);
    }
    get(artistId, eventId) {
        return http.get(`/artists/${artistId}/events/${eventId}`);
    }
    create(artistId, data) {
        return http.post(`/artists/${artistId}/events`, data);
    }
    update(artistId, eventId, data) {
        return http.put(`/artists/${artistId}/events/${eventId}`, data);
    }
    delete(artistId, eventId) {
        return http.delete(`/artists/${artistId}/events/${eventId}`)
    }
}

export default new EventsApiService()
import http from './http-common';

class ArtistsApiService {
    getAll() {
        return http.get('/artists');
    }
    get(id) {
        return http.get(`/artists/${id}`)
    }
    getByUserId(id) {
        return http.get(`/artists/user/${id}`)
    }
    create(data) {
        return http.post('/artists', data);
    }
    update(id, data) {
        return http.put(`/artists/${id}`, data);
    }
    delete(id) {
        return http.delete(`/artists/${id}`);
    }
}

export default new ArtistsApiService()
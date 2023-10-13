import http from './http-common';

class FollowersApiService {
    getAll(artistId) {
        return http.get(`/artists/${artistId}/followers`);
    }
    assign(artistId, hobbyistId) {
        return http.post(`/artists/${artistId}/followers/${hobbyistId}`);
    }
    unAssign(artistId, hobbyistId) {
        return http.delete(`/artists/${artistId}/followers/${hobbyistId}`);
    }
    count(artistId) {
        return http.get(`/artists/${artistId}/followers/count`);
    }
}

export default new FollowersApiService()
import http from './http-common';

class FollowsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/follows`);
    }
}

export default new FollowsApiService()
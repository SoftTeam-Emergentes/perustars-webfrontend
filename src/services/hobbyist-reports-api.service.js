import http from './http-common';

class HobbyistReportsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/reports`);
    }
}

export default new HobbyistReportsApiService()
import http from './http-common';

class InterestsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/specialties`)
    }
    assign(hobbyistId, specialtyId) {
        return http.post(`/hobbyists/${hobbyistId}/specialties/${specialtyId}`);
    }
    unassign(hobbyistId, specialtyId) {
        return http.delete(`/hobbyists/${hobbyistId}/specialties/${specialtyId}`);
    }
}

export default new InterestsApiService()
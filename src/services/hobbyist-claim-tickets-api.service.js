import http from './http-common';

class HobbyistClaimTicketsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/claimtickets`);
    }
    get(hobbyistId, claimTicketId) {
        return http.get(`/hobbyists/${hobbyistId}/claimtickets/${claimTicketId}`);
    }
    create(hobbyistId, data) {
        return http.post(`/hobbyists/${hobbyistId}/claimtickets`, data);
    }
    update(hobbyistId, claimTicketId, data) {
        return http.put(`/hobbyists/${hobbyistId}/claimtickets/${claimTicketId}`, data);
    }
    delete(hobbyistId, claimTicketId) {
        return http.delete(`/hobbyists/${hobbyistId}/claimtickets/${claimTicketId}`);
    }
}

export default new HobbyistClaimTicketsApiService()
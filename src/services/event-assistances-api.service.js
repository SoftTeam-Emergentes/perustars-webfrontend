import http from './http-common';

class EventAssistancesApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/events`);
    }
    assign(hobbyistId, eventId, schedule) {
        return http.post(`/hobbyists/${hobbyistId}/events/${eventId}`, schedule)
    }
    unAssign(hobbyistId, eventId) {
        return http.delete(`/hobbyists/${hobbyistId}/events/${eventId}`);
    }
}

export default new EventAssistancesApiService()
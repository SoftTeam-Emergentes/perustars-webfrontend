import http from './http-common';

class ArtistClaimTicketsApiService {
    getAll(artistId) {
        return http.get(`/artists/${artistId}/claimtickets`);
    }
    get(artistId, claimTicketId) {
        return http.get(`/artists/${artistId}/claimtickets/${claimTicketId}`);
    }
    create(artistId, data) {
        return http.post(`/artists/${artistId}/claimtickets`, data);
    }
    update(artistId, claimTicketId, data) {
        return http.put(`/artists/${artistId}/claimtickets/${claimTicketId}`, data);
    }
    delete(artistId, claimTicketId) {
        return http.delete(`/artists/${artistId}/claimtickets/${claimTicketId}`);
    }
}

export default new ArtistClaimTicketsApiService()
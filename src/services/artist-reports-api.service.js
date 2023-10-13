import http from './http-common';

class ArtistReportsApiService {
    getAll(artistId) {
        return http.get(`/artists/${artistId}/reports`);
    }
}

export default new ArtistReportsApiService()
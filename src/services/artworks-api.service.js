import http from './http-common';

class ArtworksApiService {
    getAll(artistId) {
        return http.get(`/artists/${artistId}/artworks`);
    }
    get(artistId, artworkId) {
        return http.get(`/artists/${artistId}/artworks/${artworkId}`);
    }
    create(artistId, data) {
        return http.post(`/artists/${artistId}/artworks`, data);
    }
    update(artistId, artworkId, data) {
        return http.put(`/artists/${artistId}/artworks/${artworkId}`, data);
    }
    delete(artistId, artworkId) {
        return http.delete(`/artists/${artistId}/artworks/${artworkId}`);
    }
}

export default new ArtworksApiService()
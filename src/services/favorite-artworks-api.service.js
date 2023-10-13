import http from './http-common';

class FavoriteArtworksApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/artworks`);
    }
    assign(hobbyistId, artworkId) {
        return http.post(`/hobbyists/${hobbyistId}/artworks/${artworkId}`);
    }
    unAssign(hobbyistId, artworkId) {
        return http.delete(`/hobbyists/${hobbyistId}/artworks/${artworkId}`);
    }
}

export default new FavoriteArtworksApiService()
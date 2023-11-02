import http from '../../shared/service/http-common';

export class SuppliersApiService {
    getAll() {
        return http.get('/hobbyist');
    }

    getById(id) {
        return http.get(`/hobbyist/${id}`);
    }

    create(data) {
        return http.post('/hobbyist', data);
    }

    update(id, data) {
        return http.put(`/hobbyist/${id}`, data);
    }

    delete(id) {
        return http.delete(`/hobbyist/${id}`);
    }

    findByName(name) {
        return http.get(`/hobbyist?title=${name}`);
    }
    findByLastName(lastName) {
        return http.get(`/hobbyist?title=${lastName}`);
    }
}
import { RESTDataSource } from "apollo-datasource-rest";
import qs from "qs";

class Swapi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api'
    }

    async getPeople(params: { page: number } = { page: 1 }) {
        return this.get(`/people/?${qs.stringify(params)}`)
    }

    async getPerson(id: string) {
        return this.get(`/people/${id}`)
    }

    async searchPeople(params: { search: string }) {
        // console.log(`${qs.stringify(params)}`)
        return this.get(`/people/?${qs.stringify(params)}`)
    }

    async getPlanet(id: string) {
        // console.log(`${qs.stringify(params)}`)
        return this.get(`/planets/${id}`)
    }
}

export default new Swapi()
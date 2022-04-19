"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const qs_1 = __importDefault(require("qs"));
class Swapi extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api';
    }
    async getPeople(params = { page: 1 }) {
        return this.get(`/people/?${qs_1.default.stringify(params)}`);
    }
    async getPerson(id) {
        return this.get(`/people/${id}`);
    }
    async searchPeople(params) {
        // console.log(`${qs.stringify(params)}`)
        return this.get(`/people/?${qs_1.default.stringify(params)}`);
    }
}
exports.default = new Swapi();

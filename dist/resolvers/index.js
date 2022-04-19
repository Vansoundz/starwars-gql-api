"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("$res/person");
const resolvers = {
    Query: {
        // People
        people: person_1.people,
        person: person_1.person,
        search: person_1.search,
        count: person_1.count
    },
};
exports.default = resolvers;

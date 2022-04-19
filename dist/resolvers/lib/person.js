"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = exports.search = exports.people = exports.person = void 0;
const error_1 = __importDefault(require("$lib/error"));
const people = async (_, args, { dataSources: { swapi } }) => {
    try {
        let people = await swapi.getPeople(args);
        return people.results;
    }
    catch (error) {
        (0, error_1.default)(error);
    }
};
exports.people = people;
const person = async (parent, args, { dataSources: { swapi } }) => {
    try {
        let person = await swapi.getPerson(args.id);
        return person;
    }
    catch (error) {
        (0, error_1.default)(error);
    }
};
exports.person = person;
const search = async (parent, args, { dataSources: { swapi } }) => {
    try {
        let people = await swapi.searchPeople(args);
        return people.results;
    }
    catch (error) {
        (0, error_1.default)(error);
    }
};
exports.search = search;
const count = async (parent, args, { dataSources: { swapi } }) => {
    try {
        let people = await swapi.searchPeople(args);
        return people.count;
    }
    catch (error) {
        (0, error_1.default)(error);
    }
};
exports.count = count;

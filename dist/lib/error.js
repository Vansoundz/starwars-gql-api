"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const handleError = (error) => {
    throw new graphql_1.GraphQLError(error.message);
};
exports.default = handleError;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const resolvers_1 = __importDefault(require("./resolvers"));
// import schema from './schema';
const graphql_import_files_1 = require("graphql-import-files");
const _db_1 = __importDefault(require("$db"));
async function startApolloServer(typeDefs, resolvers) {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        dataSources: () => {
            return {
                swapi: _db_1.default
            };
        }
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
const schema = (0, graphql_import_files_1.loadFiles)('**/schema/**/*.{graphql,gql}');
startApolloServer(schema, resolvers_1.default);

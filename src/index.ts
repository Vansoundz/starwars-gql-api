import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express, { Request } from 'express';
import http from 'http';
import resolvers from './resolvers';
import { DocumentNode, } from 'graphql';
// import schema from './schema';
import { loadFiles } from 'graphql-import-files';
import swapi from '$db';

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        dataSources: () => {
            return {
                swapi
            }
        }
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const schema: DocumentNode = loadFiles('**/schema/**/*.{graphql,gql}') as DocumentNode
startApolloServer(schema, resolvers)
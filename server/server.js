import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello World!",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 9000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

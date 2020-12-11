const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { buildContext } = require('./context');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: buildContext
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

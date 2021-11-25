const { ApolloServer } = require('apollo-server');

const schemas = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers,
})

server.listen(4001).then(({ url }) => {
  console.log(`🚀 API server running locally at ${url}`)
})

import { ApolloServer, gql } from 'apollo-server';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs: gql`
    type Cep {
      id: ID!
      cep: String!
      logradouro: String!
      complemento: String!
      bairro: String!
      localidade: String!
      uf: String!
      unidade: String!
      ibge: String!
      gia: String!
    }

    type Query {
      cep(cep: String!): Cep
    }
  `,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`Executando em ${url}`);
});
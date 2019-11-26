import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash.merge";

import boardResolver from "./board/board.resolver";
import boardTypeDef from "./board/board.typeDef";

const baseTypeDef = /* GraphQL */ `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

const typeDefs = [baseTypeDef, boardTypeDef];

const resolvers = merge(boardResolver);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;

const typeDef = /* GraphQL */ `
  extend type Query {
    boards(userId: String, name: String): [Board]
  }

  type Board {
    userId: String!
    name: String!
    createdDate: String!
  }
`;

export default typeDef;

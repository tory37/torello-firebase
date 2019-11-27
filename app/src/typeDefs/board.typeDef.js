import { gql } from "apollo-server-express";

export default gql`
  type Board {
    userId: String!
    name: String!
    createdDate: String!
  }

  extend type Query {
    boards(userId: String, name: String): [Board]
  }
`;

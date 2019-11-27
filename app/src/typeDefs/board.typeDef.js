import { gql } from "apollo-server-express";

export default gql`
  type Board {
    name: String!
    createdTimestamp: String!
  }

  extend type Query {
    boards(name: String, createdTimestamp: String): [Board]
  }
`;

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Class {
    id: Int!
    name: String!
    code: String!
    students: [Student]
  }

  type Student {
    id: Int!
    name: String!
    year: Int!
    major: String!
  }

  type Query {
    classes: [Class]
    students: [Student]
    class(id: Int!): Class
    student(id: Int!): Student
  }
`;

module.exports = typeDefs;

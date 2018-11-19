const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

// no instance where we need to include users passwords. it should never be shared or public
const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID }, //to activate the property in index.js
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
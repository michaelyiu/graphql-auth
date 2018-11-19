const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

// no instance where we need to include users passwords. it should never be shared or public
const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
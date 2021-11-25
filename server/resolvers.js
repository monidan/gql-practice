const data = require('./data');

const currentUserId = 'abc-1';

const resolvers = {
  Query: {
    currentUser: (parent, args) => {
      let user = data.users.find(u => u.id === currentUserId);
      let posts = data.posts.filter(p => p.userId === currentUserId)
      return {
        ...user,
        posts: posts,
      }
    },
    postsByUser: (parent, args) => {
      return data.posts.filter(p => p.userId === args.userId);
    }
  },

  User: {
    posts: (parent, args) => {
      return data.posts.filter(p => p.userId === parent.id)
    }
  },

  Mutation: {
    addPost: async (_, { content }) => {
      const post = {
        id: 'xyz-' + (data.posts.length + 1),
        content: content,
        userId: currentUserId,
      };

      data.posts.push(post);

      return post;
    }
  }
}

module.exports = resolvers;
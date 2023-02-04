const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {

        me: async (parant, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id })
            }
            console.log('not logged in')
        }

    },

    Mutation: {

        addUser: async (parant, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user }
        },

        login: async (parant, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };

        },

        saveBook: async (parant, { BookInput }) => {
            const newBook = await Book.create()
        },
    }

};

module.exports = resolvers;
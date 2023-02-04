const {  User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {

        me: async (parant, args, context) => {
            if(context.user){ 
                return await User.findOne({_id:context.user._id})
            }
            console.log('not logged in')
        }
        
     

    }, 
    Mutation: {
        addUser: async (parant, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user}
        }
    }

};

module.exports = resolvers;
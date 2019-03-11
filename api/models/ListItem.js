module.exports = {
    attributes: {
        text: {
            type: 'string'
        },


        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
};
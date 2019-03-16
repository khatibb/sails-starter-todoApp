module.exports = {
    attributes: {
        text: {
            type: 'string'
        },
        isChecked: {
            type: 'boolean'
        },

        // Add a reference to User
        owner: {
            model: 'user'
        }
    }
};
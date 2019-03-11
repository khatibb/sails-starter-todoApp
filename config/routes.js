/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
    'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },
    'POST  /api/v1/account/list/add-task': { action: 'add-task' },
    'GET  /api/v1/account/viewList': { action: 'view-list' },




    //For testing purposes -> to be removed later 
    'GET /api/v1/account/view-user': {
        skipAssets: true,
        fn: async function(req, res) {
            let tmp = await User.find({ id: req.session.userId })
                .populate('list')
                .limit(1)

            res.send(tmp[0])
        }
    },


};
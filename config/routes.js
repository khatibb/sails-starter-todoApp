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

    'GET  /api/v1/list': { action: 'view-list' },
    'POST  /api/v1/list': { action: 'add-task' },
    'DELETE  /api/v1/list/:taskId': { action: 'delete-task' },
    'PUT  /api/v1/list/:taskId': { action: 'update-task' },






};
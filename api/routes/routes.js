var userController = require('../controllers/usersController');


module.exports = function(app) {


    // Enviar email
    app.post('/api/sendEmail', userController.sendMail);



    /**############### COTIZACIONES ########################################### */


};
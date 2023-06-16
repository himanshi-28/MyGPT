/* the code imports the necessary modules. 
The express module is imported to create a router object, 
and the registerController, loginController, and logoutController functions are imported from the authController module.*/

const express=require('express');
const { registerController, loginController, logoutController } = require('../controllers/authController');

//router object
/*This line creates a router object using the express.Router() function. 
The router object allows you to define routes and their associated handlers.*/
const router=express.Router();

//routes
//REGISTER

router.post('/register', registerController);
//LOGIN
router.post('/login', loginController);

//LOGOUT
router.post('/logout', logoutController);




  


module.exports=router;


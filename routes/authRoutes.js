const {Router} = require('express');
const authController = require('../controllers/authController');
const controller = require('../controllers/userController')

const router = Router();

router.post("/register",authController.register);
router.post("/login",authController.login);
router.get("/logout",authController.logout);


// router.get('/get-users',getUsers)
// router.post('/register',registerValidation,validationMiddleware,register)

// router.patch("/sendCode",authController.resendCode);
// router.patch("/verify",authController.verifyUser); 

// router.post("/forgotPassword",authController.forgotPassword);
// router.patch("/resetPassword/:token",authController.resetPassword);
// router.patch("/updatePassword",authController.protect,authController.updatePassword);


//to ensure the routes after this path is protected
// router.use(authController.protect);
// router.use(authController.isLogged);





router
    .route("/")
    .get(controller.getAllUsers)
    .post(controller.addUser)

router
    .route("/:id")
    .get(controller.getUserById)
    .put(controller.updateUser)
    .delete(controller.deleteUser)


  
module.exports = router;
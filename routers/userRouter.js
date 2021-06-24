const router = require('express').Router();
const auth = require("../middleware/auth")
const userCtrl = require("../controller/userController");

router.get('/search', auth, userCtrl.searchUser);
router.get('/user/:id', auth, userCtrl.getUser);
router.patch('/user', auth, userCtrl.updateUser);


module.exports = router
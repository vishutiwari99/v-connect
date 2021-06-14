const router = require('express').Router();
const auth = require("../middleware/auth")
const userCtrl = require("../controller/userController");

router.get('/search', auth, userCtrl.searchUser);
router.get('/user/:id', auth, userCtrl.getUser)


module.exports = router
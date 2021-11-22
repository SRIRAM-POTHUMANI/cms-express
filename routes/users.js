var express = require('express');
var router = express.Router();
var userModule = require('../module/usermodule');

router.post('/saveuser', userModule.postUser);
router.get('/getuser', userModule.getUser);
router.patch('/updatePassword/:username', userModule.updatePassword);

module.exports = router;

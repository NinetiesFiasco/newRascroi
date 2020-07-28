const router = require('express').Router();
const {
    registrationData,
    deleteMe,
    userUpdate,
    userUpdatePassword
} = require('./controller.js');

router.post("/data",registrationData);

router.post("/update",userUpdate);

router.post("/updatepassword",userUpdatePassword);

router.get("/deleteMe",deleteMe);

module.exports = router;
const router = require('express').Router();
const {
    enter,
    exit,
    testLogin
} = require('./controller.js');


router.get("/itsMe", testLogin);

router.post("/",enter);

router.get("/exit",exit);

module.exports = router;
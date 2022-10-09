const router = require("express").Router();
const noteRoutes = require("../APIroutes/noteRoutes.js");

router.use(noteRoutes);
module.exports = router;
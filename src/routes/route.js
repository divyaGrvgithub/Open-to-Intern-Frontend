const express = require("express");
const router = express.Router();
const interController = require("../controllers/internController");
const collegeController = require("../controllers/collegeController");

router.post("/functionup/colleges", collegeController.createCollege);
router.post("/functionup/interns", interController.createIntern);
router.get("/functionup/collegeDetails", interController.getdata);

router.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "Please Input valid URL." });
});


module.exports = router;
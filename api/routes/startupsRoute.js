const express = require("express");
const router = express.Router();
const InfoController = require("../controllers/infoController");

router.get("/getAllInfo", (req, res) => {
  console.log("Getting all Info");
  InfoController.getData((data) => {
    res.send(data);
  });
});

router.post("/addInfo", (req, res) => {
  console.log("on Add Info route");
  InfoController.addStartup(req.body, (err, status, info) => {
    res.status(status).send({ err, status, info });
  });
});

module.exports = router;

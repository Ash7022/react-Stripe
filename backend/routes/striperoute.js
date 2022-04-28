const express = require("express");
const { stripe  } = require("./stripecontroller2");
const bodyParser = require("body-parser");

const router = express.Router();

router.route("/").get((req, res)=>{
    res.json("server is working fine")
})

router.route("/payment").post(stripe);
// router.route("/webhook").post(bodyParser.raw({type:"application/json"}),webhooks)

router.route("/config").get((req, res)=>{
    res.json({publishablekey:"publickey"});
})

module.exports = router;
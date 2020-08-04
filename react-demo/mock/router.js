const express = require("express")
const router = express.Router();

router.get("/api/list",(req, res) => {
    res.send([
        {
            name: "shier",
            age: 20
        },
        {
            name: "fang",
            age: 23
        }
    ])
})

module.exports = router;
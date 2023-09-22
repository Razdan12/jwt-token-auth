const express = require("express");
const { Login } = require("./LoginService");

const router = express.Router();

router.post("/", async (req, res) => {
    const {email, password} = req.body;

    try {
        const dataUser = await Login(email, password);
        res.status(200).json(dataUser)
    } catch (error) {
        res.status(401).json({error: error})
    }
})

module.exports = router;
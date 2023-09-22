const express = require("express");
const { GetAllUserService, TambahUser, EditUserService, HapusUserService } = require("./UserService");
const { AuthAdmin } = require("../Auth/Authentikasi");
const router = express.Router();

router.get("/", AuthAdmin , async (req, res) => {
    try {
        const data = await GetAllUserService();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: "gagal"})
    }
})

router.post("/", async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const data = await TambahUser(email, name, password);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: "gagal"})
    }
})

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const {email, name} = req.body;
    try {
        const data = {
            id,
            email,
            name
        } 
        const user = await EditUserService(data)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: "gagal"})
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await HapusUserService(id);
        res.status(200).json({message: "data berhasil dihapus"})
    } catch (error) {
        res.status(500).json({message: "gagal"})
    }
})

module.exports = router;
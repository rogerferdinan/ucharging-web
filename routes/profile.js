const express = require("express")
const checkLogin = require("../helper/check_login")
const profileRouter = express.Router()

profileRouter.get("/profile", checkLogin, async(req, res) => {
    req.session.destroy()
    res.render("profile")
})

module.exports = profileRouter
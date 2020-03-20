const express = require("express");
const User = require("../db/models/user");
const router = express.Router();

router
    .route("/")
    .get((req,res)=>{
        User.where(req.query)
            .fetchAll()
            .then(users => {
                res.status(200).json({users});
            });
    })
    .post((req,res)=>{
        new User ({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        .save()
        .then(newUser => {
            res.status(201).json({newUser});
        });
    });

    module.exports = router;
const express = require("express");
const Rental = require("../db/models/rental");
const router = express.Router();

router
    .route("/")
    .get((req,res)=>{
        Rental.where(req.query)
            .fetchAll()
            .then(rentals => {
                res.status(200).json({rentals});
            });
    })
    .post((req,res)=>{
        new Rental ({
            type:req.body.type,
            beds:req.body.beds,
            bathrooms:req.body.bathrooms,
            furnished:req.body.furnished,
            adress:req.body.adress,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description,
            user_id:2
        })
        .save()
        .then(newRental => {
            res.status(201).json({newRental});
        });
    });

    module.exports = router;
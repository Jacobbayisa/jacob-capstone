const express = require("express");
const Rental = require("../db/models/rental");
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'public')
    },
    filename: (req,file,cb) =>{
        cb(null, Date.now() + '-' +file.originalname);
    }
})

//create an upload instance and recive a single file
let upload = multer({storage: storage}).single('file');

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
        upload(req,res, (err) =>{
            if(err instanceof multer.MulterError){
                return res.status(500).json(err + "unaable to uploade image");
            }else if (err){
                return res.status(500).json(err + "unable to upload image 2");
            }
            console.log(req.file.path);
            console.log(req.body.beds);
            new Rental ({
                type:req.body.type,
                beds:req.body.beds,
                bathrooms:req.body.bathrooms,
                furnished:req.body.furnished,
                adress:req.body.adress,
                price:req.body.price,
                image:req.file.path,
                description:req.body.description,
                user_id:2
            })
            .save()
            .then(newRental => {
                res.status(201).json({newRental});
            });
        })
        
    });

    module.exports = router;
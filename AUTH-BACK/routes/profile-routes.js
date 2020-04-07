const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/User");

router.get("/profile", (req, res, next) => {
  User.find()
   
    .then(allTheUsers => {
      res.json(allTheUsers);
    })
    .catch(err => {
      res.json(err);
    });
});


router.get('/profile/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }                           
    User.findById(req.params.id) 
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })
  
 
  router.put('/profile/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({ message: `users with ${req.params.id} is updated successfully.` });
      })
      .catch(err => {
        res.json(err);
      })
  })
  


module.exports = router;

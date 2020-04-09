const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");

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
  
 
  router.put('/profile/edit-profile', (req, res, next)=>{
    const userId = req.body.user._id
    console.log(userId)

    User.findByIdAndUpdate(userId, req.body)
      .then(() => {
        res.json({ message: `users with ${userId} is updated successfully.` });
      })
      .catch(err => {
        res.json(err);
      })
  })
  


module.exports = router;

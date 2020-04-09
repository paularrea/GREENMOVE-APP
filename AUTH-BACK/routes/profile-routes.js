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
    const {name, _id, lastName, sobreMi, imageUrl} = req.body
    console.log(req.body, 'req body')

    // if(!mongoose.Types.ObjectId.isValid(userId)) {
    //   res.status(400).json({ message: 'Specified id is not valid' });
    //   return;
    // }
    
    User.findByIdAndUpdate(_id, {name, lastName, sobreMi, imageUrl})
  
      .then((res) => {
        console.log(_id, req.body, 'CONSOLE')
        res.json({ message: `users with ${_id} is updated successfully.` });
        
      })
      .catch(err => {
        res.json(err);
      })
  })
  


module.exports = router;

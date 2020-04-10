const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Event = require("../models/Event");
const User = require("../models/user");



router.get("/events", (req, res, next) => {
  Event.find()
    .then(allTheEvents => {
      res.json(allTheEvents);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/events/create', async (req, res, next) => {
  console.log(req.body, 'test')
  const {_id} = req.body
  try{
  const newEvent = await Event.create(req.body)
  res.status(200).json(newEvent);
 
  await User.updateOne(   
         _id ,
        { $push:{myAccions: newEvent._id}}
      );
  
    }catch( err ){
      console.log(err)
    }
})
//JOIN
router.post('/events/:id', async (req, res, next) => {
  const {_id} = req.body
  const eventId = req.params.id
  console.log('TEEEEEEEEST :',{_id},eventId)
  try{
  const joinEvent = await User.updateOne({_id},
    {$push:{joinAccions: eventId}})
  const newMember = await Event.updateOne(eventId ,
    { $push:{members: {_id}}})
  res.status(200).json(newMember, joinEvent);
  
    }catch( err ){
      console.log(err)
    }
})

router.get('/events/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    Event.findById(req.params.id) 
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })
  
  
  router.put('/events/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Event.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({ message: `events with ${req.params.id} is updated successfully.` });
      })
      .catch(err => {
        res.json(err);
      })
  })
  
  router.delete('/events/:id', (req, res, next)=>{
  
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Event.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({ message: `events with ${req.params.id} is removed successfully.` });
      })
      .catch( err => {
        res.json(err);
      })
  })

module.exports = router;

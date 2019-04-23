const express = require('express');
const router = express.Router();
const todoModel = require('../models/todos.model');

//Liste de toutes les tâches
router.get('/', (req, res)=>{
   todoModel.find((err, data)=>{
      if(err){
         console.log(err);
         res.json(err);
      } else {
         res.json(data);
      }
   });
});

//Ajout d'un tâche
router.post('/new', (req, res)=>{
   //Création d'un tâche
   let newtask = new todoModel({
      taskName: req.body.taskName,
      done: req.body.done,
      createdAt: new Date(req.body.dateString)
   });

   //Sauvegarde de la tâche
   newtask.save((err)=> {
      if(err){
         res.json({success: false, error: err});
      }else {
         res.json({success: true});
      }
   });
});



module.exports = router;
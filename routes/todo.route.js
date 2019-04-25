const express = require("express");

const router = express.Router();
const todoModel = require("../models/todos.model");

//Liste de toutes les tâches
router.get("/", (req, res) => {
  todoModel.find((err, data) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

//Ajout d'un tâche
router.post("/new", (req, res) => {
  console.log(req.body.dateString);
  let dateCreated = new Date(req.body.dateString);
  console.log(dateCreated.toDateString());

  //Création d'un tâche
  let newtask = new todoModel({
    taskName: req.body.taskName,
    done: req.body.done,
    createdAt: new Date(req.body.dateString)
  });

  //Sauvegarde de la tâche
  newtask.save(err => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json({ success: true });
    }
  });
});

router.delete("/:id", (req, res) => {
  todoModel.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json({ success: false, error: err });
    } else {
      res.json({ success: true });
    }
  });
});

router.put("/", (req, res) => {

   console.log(req.body);

  todoModel.updateOne(
    { _id: req.body._id },
    {
      taskName: req.body.taskName,
      done: req.body.done,
      createdAt: new Date(req.body.createdAt)
    },
    (err) => {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({ success: true });
      }
    }
  );
});

module.exports = router;

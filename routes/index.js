const router = require("express").Router();
const Workout = require("../models/workout");
const path = require('path');

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;

router.get("/api/workouts", (req, res) => {
    Workout.findOne({})
    .sort({date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne
    (
        {
        _id: req.params.id,
    },
        req.body
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .sort({date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});
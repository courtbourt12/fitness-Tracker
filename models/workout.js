const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    type: {
        type: String,
        required: "Enter the type of your workout."
    },
    name: {
        type: String,
        trim: true,
        required: "Enter the name of your workout."
    },
    duration: {
        type: Number,
        required: "Enter the duration of your workout."
    },
    distance: {
        type: Number,
        required: "What distance did you travel?"
    },
    weight: {
        type: Number,
        required: "How much weight did you lift?"
    },
    reps: {
        type: Number,
        required: "How many reps?"
    },
    sets: {
        type: Number,
        required: "How many sets?"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Enter the name of your workout."
    },
    value: {
        type: Number,
        required: "Enter the weight/duration of your workout."
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
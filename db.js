var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var HabitSchema = new mongoose.Schema({
    ID: String,
    name: String,
    BestStreak: Number,
    Current: Number,
    TotalDone: Number,
    TotalTracked: Number,
    DoneDates:[String],
    NotDoneDates:[String],
    Time: String,
});

var Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
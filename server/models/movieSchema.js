const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieschema = new Schema({
    MovieName : String,
    Language:String,
	RDate:Date,
    Budget :Number,
    Collection:Number,
    
    Review:String
});
module.exports = mongoose.model('Movies',movieschema);
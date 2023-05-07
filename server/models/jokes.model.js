const mongoose = require('mongoose'); 
//bring in middleware to create collection 
//optional add validations 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Joke setup is required"], //optional validation w/custom response+
        minlength: [10, "Joke setup must be at least 10 characters"]
        
    },
    punchline: {
        type: String,
        required: [true, "Joke punchline is required"], //optional validation
        min: [3, "Joke setup must be at least 3 characters"]
    }
},{timestamps:true}); //optional for created_at and updated_at
const Joke = mongoose.model('Joke', JokeSchema); 
module.exports = Joke;
//blueprint created, now goes into mongoose.model - & creates collection with the name of 'Joke'
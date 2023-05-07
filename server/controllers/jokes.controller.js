const Joke = require('../models/jokes.model');
//importing the Joke variable that we exported from the jokes.model.js

module.exports = {
    //CREATE
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });},
    //READ ALL
    getAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => res.json(allJokes))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    //READ ONE 
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err));
    },
    
    //READ RANDOM
    //$sample randomly selects specified # of documents from the input documents
    //aggregate operator randomly selects # of documents
    randomJoke: (req, res) => {
        Joke.aggregate(
            [{$sample: {size: 1}}]
        )
        .then(randomJoke => res.json(randomJoke))
        .catch(err => res.json(err));
    },

    //UPDATE
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });},
    
    //DELETE
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
}

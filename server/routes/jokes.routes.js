const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/random', JokeController.randomJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}

const mongoose = require('mongoose');

// connect to local database
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('we are connected'));

// define the schema
const ideaSchema = mongoose.Schema({
  subject: String,
  text: String,
});

// define the model
const Idea = mongoose.model('Idea', ideaSchema);

// queries
module.exports = {

  // insert one idea into database
  insertOne: (idea) => {
    const newIdea = new Idea(idea);
    return newIdea.save();
  },

  // get all ideas from database
  getAll: () => (
    Idea.find()
  ),
};


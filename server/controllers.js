const { insertOne, getAll } = require('../database/index');
const _ = require('lodash');

module.exports = {
  ideas: {
    // get all ideas and send it back to the client if success
    get: (req, res) => {
      getAll()
      .then((ideas) => {
        const unescapedIdeas = ideas.map((idea) => (
          {
            id: idea.id,
            subject: _.unescape(idea.subject).toUpperCase(),
            text: _.unescape(idea.text),
          }
        ));
        res.send(unescapedIdeas);
      })
      .catch((err) => res.send(err));
    },

    // post the idea and respond with the result of the post if success
    post: (req, res) => {
      insertOne(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
    },
  },
};

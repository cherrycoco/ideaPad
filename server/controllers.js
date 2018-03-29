const { insertOne, getAll } = require('../database/index');

module.exports = {
  ideas: {
    // get all ideas and send it back to the client if success
    get: (req, res) => {
      getAll()
      .then((ideas) => {
        res.send(ideas);
      })
      .catch((err) => {
        console.log('error from get ideas', err);
      });
    },

    // post the idea and respond with the result of the post if success
    post: (req, res) => {
      insertOne(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log('error from post idea', err);
      });
    },
  },
};

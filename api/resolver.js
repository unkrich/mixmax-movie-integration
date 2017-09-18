var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var createTemplate = require('../utils/template.js').resolver;

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  handleSearchString(term, req, res);
};

function handleSearchString(term, req, res) {

  request({
    url: 'http://www.omdbapi.com/',
    qs: {
      t: term,
      apikey: 'b00dc83c',
      plot: 'full'
    },
    gzip: true,
    json: true,
    timeout: 10 * 1000
  }, function(err, response) {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.json({
      body: createTemplate(response.body)
        // Add raw:true if you're returning content that you want the user to be able to edit
    });
  });
}
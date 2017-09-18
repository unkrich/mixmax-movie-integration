var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var createTemplate = require('../utils/template.js').typeahead;

// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(enter a search term)</i>',
      text: ''
    }]);
    return;
  }

  request({
    url: 'http://www.omdbapi.com/',
    qs: {
      s: term,
      page: 1,
      apikey: 'b00dc83c'
    },
    gzip: true,
    json: true,
    timeout: 10 * 1000
  }, function(err, response) {
    if (err || response.statusCode !== 200) {
      res.status(500).send('Error');
      return;
    }
    var results = _.chain(response.body["Search"])
      .map(function(data) {
        return {
          title: createTemplate(data),
          text: data['Title']
        };
      })
      .value();

    if (results.length === 0) {
      res.json([{
        title: '<i>(no results)</i>',
        text: ''
      }]);
    } else {
      res.json(results);
    }
  });

};
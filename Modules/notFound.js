'use strict';

function notFound(req, res) {
  res.status(404).send('Sorry, route not found');
}

module.exports = notFound;

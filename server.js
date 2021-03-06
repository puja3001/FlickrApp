const express = require('express');

//Url-parser is required to parse the url and get information like query parameters
const UrlParser = require('url');
const PORT = process.env.PORT || 5000;
const path = require('path');

// Allowed extensions list
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];

let app = express();

//Path for static files
app.use(express.static(path.join(__dirname, 'dist')));

//Entry point of the api
app.get('/api', (req, res) => {
    res.json({message: 'Wecome to Flickr Image API'});
});

//To get the feeds data
app.get('/api/feeds', (req, res) => {
    var url_parts = UrlParser.parse(req.url, true);
    var query = url_parts.query;
    require('./controllers/getFeeds')(res, query);
  });

  // Redirect all the other resquests
  app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        req.url = req.url.split("?")[0];
        res.sendFile(path.resolve(`dist/flickr-app/${req.url}`));
    } else {
        res.sendFile(path.resolve('dist/flickr-app/index.html'));
    }
  });

  app.listen(PORT, () => console.log(`Listening on ${PORT}`));

  module.exports = app;
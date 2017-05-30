var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var parser = require('rss-parser');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.listen(3000, function () {
  console.log('server is listening on port 3000!')
})

 
parser.parseURL('http://www.bayt.com/live-bookmarks/all-rss.xml', function(err, parsed) {
  //.log(parsed.feed.entries);
  parsed.feed.entries.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})


var request = require("request");
//Parser for rss
const RssParser = require('rss-parser');
//Parser for HTML
const HtmlParser = require('cheerio');


//Link for Flickr public feeds
const FEED_LIST = 'http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200';

var getFeeds = function(tags){
    let rssParser = new RssParser();
    return new Promise(function(resolve, reject){
        var resObj = {
            images:[]
        };
        var feed_rss_url = FEED_LIST;
        if(tags != undefined && tags.length > 0){
            feed_rss_url = feed_rss_url +  "&tags=" + tags;
        }
        rssParser.parseURL(feed_rss_url).then(response => {
            response['items'].map(function(item){
                $ = HtmlParser.load(item['content']);
                var imgSrc = $('img').attr('src');
                var imgHeight = $('img').attr('height');
                var imgWidth = $('img').attr('width');
                var itemObj = {
                    title: item['title'],
                    imageUrl: imgSrc,
                    imgWidth: imgWidth,
                    imgHeight: imgHeight
                }
                resObj['images'].push(itemObj);
            })
            resolve(resObj);
        })
        .catch(function(err){
            reject(err);
        });
    })
    .catch(function(err){
    })
}

module.exports = function(res, query) {
    getFeeds(query.tags).then(function (result){
        //this is to allow the requests from another domain
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.json(result);
    })
}
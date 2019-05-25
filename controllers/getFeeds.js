var request = require("request");
const RssParser = require('rss-parser');
const HtmlParser = require('cheerio');

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
            //if(response.statusCode == 200){
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
            //}
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
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.json(result);
    })
}

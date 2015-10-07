var express = require('express');
var router = express.Router();
var key = require('../../_config.js');
var request = require('request');

router.post('/api/vision', function(req, res){
  var imgUrl = req.body.imgUrl;
  // var imgUrl = 'http://www.online-image-editor.com//styles/2014/images/example_image.png';
  request({
    method: 'GET',
    url: 'http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?url='
          +imgUrl+'&apikey='+key.alchemyKey+'&outputMode=json'
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

router.post('/api/instagram', function(req, res) {
  var keyword = req.body.keyword;
  request({
    method: 'GET',
    url: "https://api.instagram.com/v1/tags/" + keyword + "/media/recent?client_id="+key.instagramKey
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

router.post('/api/facetags', function(req, res){
  console.log('made it to the GET');
  var imgUrl = req.body.imgUrl;
  // var imgUrl = 'http://www.online-image-editor.com//styles/2014/images/example_image.png';
  request({
    method: 'GET',
    url: 'http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageFaceTags?url='
          +imgUrl+'&apikey='+key.alchemyKey+'&outputMode=json'
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

router.post('/api/entities', function(req, res){
  var imgUrl = req.body.imgUrl;
  request({
    method: 'GET',
    url: 'http://gateway-a.watsonplatform.net/calls/url/URLGetRankedNamedEntities?url='
          +imgUrl+'&apikey='+key.alchemyKey+'&outputMode=json'
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {
      res.json(response);
    }
  });
});

// http://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords?url=http://www.online-image-editor.com//styles/2014/images/example_image.png&apikey=dfc8ffa9897e45e8753a1e3c63b1ef1791208403

module.exports = router;

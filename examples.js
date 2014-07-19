var apiKeys = require('./apiKeys');
var NYTDistricts = require('./nytdistricts');
var nytAPIkey = apiKeys.nytAPIkey
var nytdistricts = new NYTDistricts(nytAPIkey);

nytdistricts.getDistricts(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my districts", data)
})

nytdistricts.getCityCouncilDistrict(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my City Council district: ",data)
})

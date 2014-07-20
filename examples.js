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

nytdistricts.getStateSenateDistrict(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my State Senate District: ",data)
})

nytdistricts.getStateAssemblyDistrict(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my State Assembly district: ",data)
})

nytdistricts.getHouseDistrict(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my congressional district: ",data)
})

nytdistricts.getBorough(40.7115760,-73.7972060, function(err,data){
  if(err) throw err;
  console.log("my borough: ",data)
})

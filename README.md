# nytdistricts - npm module
A node.js wrapper for the New York Times Districts API.

Check out their docs [here](http://developer.nytimes.com/docs/districts_api).


## Installation

```
npm install nytdistricts
```

## Usage

```
var NYTDistricts  = require('nytdistricts');

var nytdistricts = new NYTDistricts(apiKey);

nytdistricts.getDistricts(40.7115760,-73.7972060, function(err, data) {
  if (err) throw err;
  console.log(data);
});

// { results:
   [ { district: '24',
       level: 'State Assembly',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/1358.xml' },
     { district: '14',
       level: 'State Senate',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/1398.xml' },
     { district: '24',
       level: 'City Council',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/1530.xml' },
     { district: '08',
       level: 'Community District',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/215.xml' },
     { district: 'Jamaica Hills',
       level: 'Neighborhood',
       kml_url: null },
     { district: '6',
       level: 'U.S. House',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/1310.xml' },
     { district: 'Queens',
       level: 'Borough',
       kml_url: 'http://graphics8.nytimes.com/packages/xml/represent/queens.xml' } ] }
```
If you just want to get specific districts, you can use these methods: getCityCouncilDistrict(lat,lng, callback),
getStateSenateDistrict(lat,lng, callback),
getStateAssemblyDistrict(lat,lng, callback),
getHouseDistrict(lat,lng, callback)

see examples.js for examples.

## License
MIT

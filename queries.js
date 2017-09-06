var mongoose = require('mongoose'),
    config = require('./config'),
    Listing = require('./ListingSchema')
/* Fill out these functions using Mongoose queries*/
  
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name: 'Library West'},function(err,result){
      if (err) throw err;
      console.log(result);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOne({code: CABL}, function(err,result) {
    if (err) throw err;
    if(result){
      result.remove(function(err){
      if(err) throw err;
      console.log(result);
     });
    }
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({code: 'PHL'},
  {address: '1234 NewAddress Rd. Gainesville, FL'},
  function(err,result){
    if (err) throw err;
    console.log(result);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listings.find({}, function(err,entries){
    if(err) throw err;
    console.log(entries);
  });
};


findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
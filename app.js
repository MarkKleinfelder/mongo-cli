var mongo = require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/restaurants_db";
var prompt= require("prompt-sync")();

/*mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var allChoice = prompt("Type 'all' and press enter to display all restaurants names");
	var addRest = prompt("Type 'add' to add your own restaurant");

	if(addRest == 'add'){
		collection.insert().toArray(function(err,docs){

		})
	}*/

/*	if(allChoice == "all"){
	collection.find().toArray(function(err, docs){
		console.log(docs);
	});
}else {
	console.log("Aw you don't want to see all restaurants?");
}
});*/

//TASK ONE

/*mongo.connect(url,function(err, db){
	var collection = db.collection('restaurants');
	var singleChoice = prompt('Enter a restaurant please: ');
	collection.find({"name":singleChoice}).toArray(function(err, doc){
		console.log(doc);
	});
}); */


// TASK TWO

/*mongo.connect(url,function(err, db){
	var collection = db.collection('restaurants');
	var insertChoice = prompt("Enter your restaurant name:");
	var yelpChoice = prompt("whats the yelp page");
	collection.insert({
		"name":insertChoice,
		"yelp":yelpChoice
		});
	console.log("Inserted new Restaurant! weeeeeeeee")
});*/

// HOMEWORK pt1

mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	var editChoice = prompt('Enter the name of the restaurant you want to change: ');
	var editToChoice = prompt('Enter the NEW name of the restaurant ');
	
	collection.update(
	{ "name": editChoice},
	{$set:{"yelp" : editToChoice}
	});
	
});



// HOMEWORK pt2

/*mongo.connect(url,function(err, db){
	var collection = db.collection('restaurants');
	var deleteChoice = prompt('Enter name of restaurant you want to remove: ');
	collection.remove({"name" : deleteChoice});
	console.log("you removed " + deleteChoice)
});
*/





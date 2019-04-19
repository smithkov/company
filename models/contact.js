const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
   name: {type:String}
});


var Contact = module.exports = mongoose.model('Contact', contact);

// module.exports.getAll = function(callback, limit) {
//  City.find(callback).limit(limit);
// }

// module.exports.delete = function(id, callback){
// 	var query = {_id:id};
//
// 	City.remove(query,callback);
// }

// module.exports.getById = function(id, callback) {
//  City.findById(id, callback);
// }
//
// module.exports.getByName = function(name, callback) {
//  City.findOne({name: name}, callback);
// }
module.exports.add = function(data, callback) {
 Contact.create(data, callback);
}

// module.exports.update = function(id, name, options, callback){
// 	var query = {_id:id};
// 	var update = {
// 		name: name
// 	}
// 	City.findOneAndUpdate(query,update, options,callback);
// }

var mongoose = require('mongoose');

module.exports = mongoose.model('Profile', {
	name: String,
	specialization: String
});

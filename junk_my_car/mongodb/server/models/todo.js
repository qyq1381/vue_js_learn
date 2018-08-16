var mongoose = require('mongoose');



var Todo = mongoose.model('Todo',{
	
	year: {
		type: Number,
		default: null
	},
	make1: {
		type: String,
		require: true,
		trim: true
	},
	make2: {
		type: String,
		require: true,
		trim: true
	},
	make3: {
		type: String,
		require: true,
		trim: true
	},
	zip: {
		type: Number,
		default: null
	}

});

module.exports = {Todo};
/*
var data = {
        "year": year_v,
        "make1": make1_v,
        "make2": make2_v,
        "make3": make3_v,
        "zip": zip_v,
    }
*/
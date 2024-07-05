const { date } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema(
	{
	
		comment:{type:String},

		rating:{type:Number,
			min:1,max:5},

		cratedAt:{type:Date,
			default:Date.now()},
	}
);


module.exports = new mongoose.model("Review",reviewSchema); 
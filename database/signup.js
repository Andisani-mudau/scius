const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/scius')
    .then(() => console.log('Signup module connected to Mongoose'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Adding user
const signupForm = new mongoose.Schema({
    primary: {
	profileImage: {
	    type: String,
	    required: false
	},
	userName:{
	    type: String,
	    required: true
	},
	firstName:{
	    type: String,
	    required: true
	},
	lastName:{
	    type: String,
	    required: true
	},
	gender:{
	    type: String,
	    required: true
	},
	age:{
	    type: String,
	    required: true
	},
    },

    secondary: {
	password:{
	    type: String,
	    required: true
	},
	email:{
	    type: String,
	    required: true
	},
	phone:{
	    type: String,
	    required: true
	},
    },

    tertiary: {
	height:{
	    type: String,
	    required: false
	},
	waistSize:{
	    type: String,
	    required: false
	},
	shoeSize:{
	    type: String,
	    required: false
	},
	topSize:{
	    type: String,
	    required: false
	},
	favoriteColor1:{
	    type: String,
	    required: false
	},
	favoriteColor2:{
	    type: String,
	    required: false
	},
	favoriteColor3:{
	    type: String,
	    required: false
	},
	primaryLanguage:{
	    type: String,
	    required: false
	},
    },

    address: {
	continent:{
	    type: String,
	    required: false
	},
	country:{
	    type: String,
	    required: false
	},
	province:{
	    type: String,
	    required: false
	},
	city:{
	    type: String,
	    required: false
	},
	address1:{
	    type: String,
	    required: false
	},
	address2:{
	    type: String,
	    required: false
	},
	postalCode:{
	    type: String,
	    required: false
	},
	geologicalCoordinateLocation:{
	    type: String,
	    required: false
	},
    },

    idNo: {
	type: String,
	required: false
    },

    financialDetails: {
	nameOnCard:{
	    type: String,
	    required: false
	},
	cardNo:{
	    type: String,
	    required: false
	},
	accountNo:{
	    type: String,
	    required: false
	},
	month:{
	    type: String,
	    required: false
	},
	year:{
	    type: String,
	    required: false
	},
	cv:{
	    type: String,
	    required: false
	},
	branchCode:{
	    type: String,
	    required: false
	},
    },

    webActivity: {
	regDate:{
	    type: String,
	    required: true
	},
	darkMode:{
	    type: Boolean,
	    required: true
	},
	signedIn:{
	    type: Boolean,
	    required: true
	},
	flagged:{
	    type: Boolean,
	    required: true
	},
	banned:{
	    type: Boolean,
	    required: true
	},
	deactivated:{
	    type: Boolean,
	    required: true
	},
	deleted:{
	    type: Boolean,
	    required: true
	},
	waiting:{
	    type: Boolean,
	    required: true
	},
	paid:{
	    type: Boolean,
	    required: true
	},
	answered:{
	    type: Boolean,
	    required: true
	},
	winner:{
	    type: Boolean,
	    required: true
	},
    }
});

const collection = new mongoose.model("students", signupForm);

module.exports = collection;

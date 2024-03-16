const mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/scius')
    .then(() => console.log('Dashboard module connected to Mongoose'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const dashboardx = new mongoose.Schema({
    
    country: {
	type: String,
	required: false
    },
    banner: {
	image: {
	    type: String,
	    required: false
	},
	content: {
	    type: String,
	    required: false
	},
    },
    notification: {
	image: {
	    type: String,
	    required: false
	},
	content: {
	    type: String,
	    required: false
	},
    },
    community: {
	content: {
	    type: String,
	    required: false
	},
    },
    reward: {
	content: {
	    type: String,
	    required: false
	},
    },
    social: {
	content: {
	    type: String,
	    required: false
	},
    }
});

const Dashboard = new mongoose.model("dashboard", dashboardx);

module.exports = Dashboard;

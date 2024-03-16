const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const app = express();
const collection = require('./database/signup');
const Dashboard = require('./database/dashboard');

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use("/database", express.static(path.resolve(__dirname, "database")));

/* app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
}); */
//app routes start
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/dashboard", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/about", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/account", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/community", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-info", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-pay", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-play", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-results-lost", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-results-win", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-submitted", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/module-wait", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/modules", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/notifications", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/payment-method", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/personal-details", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/rewards", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/settings", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/sign-in", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/sign-up", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
//end routes
app.get("/data", (req, res) => {
    res.sendFile(path.resolve(__dirname, "database"));
});
/*
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.ejs"));
});
*/

app.get("/database", (req, res) => {
    res.sendFile(path.resolve(__dirname, "database"));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // Updated to use built-in JSON parsing middleware

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/scius')
    .then(() => console.log('Connected to Mongoose'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const date = new Date();
const time  = new Date().getTime();
const targetDate = date + "_" + time

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
	cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
	cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

app.post("/sign-up", upload.single('image'), async(req, res)=>{

    const plainPassword = req.body.password; // This is the password entered by the user
    const saltRounds = 10; // Number of salt rounds for bcrypt

    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    
    const data ={
	
	primary: {
	    profileImage: "",
	    userName: req.body.userName,
	    firstName: req.body.firstName,
	    lastName: req.body.lastName,
	    gender: req.body.gender,
	    age: req.body.age
	},

	secondary: {
	    password: hashedPassword,
	    email: req.body.email,
	    phone: req.body.phone
	},

	tertiary: {
	    height: "",
	    waistSize: "",
	    shoeSize: "",
	    topSize: "",
	    favoriteColor1: "",
	    favoriteColor2: "",
	    favoriteColor3: "",
	    primaryLanguage: ""
	},

	address: {
	    continent: "" ,
	    country: "" ,
	    province: "" ,
	    city: "",
	    address1: "",
	    address2: "" ,
	    postalCode: 0,
	    geologicalCoordinateLocation: ""
	},

	idNo: 0,

	financialDetails: {
	    nameOnCard: "",
	    cardNo: 0,
	    accountNo: 0,
	    month: 0,
	    year: 0,
	    cv: 0,
	    branchCode: 0
	},

	webActivity: {
	    regDate: date,
	    darkMode: false,
	    signedIn: false,
	    flagged: false,
	    banned: false,
	    deactivated: false,
	    deleted: false,
	    waiting: false,
	    paid: false,
	    answered: false,
	    winner: false
	}
    };
    
    await collection.insertMany([data]);
    res.redirect('/sign-in');
   
});
var userInput;
app.post("/sign-in", async(req, res, err)=>{
    try {
	userInput = req.body.userInput;
	const password = req.body.password;

	// Find user by username
	const user = await collection.findOne({ 'primary.userName': userInput });
	if (!user) {
	    // User not found
	    return res.status(404).send('User not found');
	}
	else {
	    // Compare the password
	    const passwordMatch = await bcrypt.compare(password, user.secondary.password);
	    if (passwordMatch) {
		// Redirect to dashboard if password is correct
		res.redirect('/dashboard');
	    } else {
		res.send('Incorrect password');
	    }
	}
    } catch (error) {
	console.error(error);
	res.status(500).send("Error signing in");
    }
});

app.get("/database/data", async(req, res)=>{
    try {
	// Find dashboard by country
	
	const dashboard = await Dashboard.findOne({"country": "Global"});

	if (!dashboard) {
	    // Dashboard not found for the global country
	    console.log('Dashboard:', dashboard);
	    return res.status(404).send('Dashboard not found for the global country');
	}

	// Dashboard found, send it as JSON response
	console.log('Dashboard:', dashboard);
	res.json(dashboard);
    } catch (error) {
	// Handle errors
	console.error('Error finding dashboard:', error);
	res.status(500).send(`Error handling dashboard`);
    }
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running smoothly..."));

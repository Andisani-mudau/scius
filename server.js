const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const app = express();
const collection = require('./database/signup');

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use("/database", express.static(path.resolve(__dirname, "database")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
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

app.post("/sign-in", async(req, res, err)=>{
    try {
	const userInput = req.body.userInput;
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
	res.status(500).send("<p><b>Error signing in</b></p>");
    }
});

app.get("/dasboard", async(req, res)=>{
    try {
	
	const x = "Hello World";
	
	
	
    } catch (error) {
	console.error(error);
	res.status(500).send("...");
    }
});
app.listen(process.env.PORT || 3000, () => console.log("Server is running smoothly..."));

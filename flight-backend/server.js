// // // server.js


// // const express = require('express');
// // const fetch = require('node-fetch'); // If you don't have fetch, install it: npm install node-fetch
// // const cors = require('cors');

// // const app = express();
// // const PORT = 5000;

// // // Enable CORS for all routes
// // app.use(cors());

// // app.get('/api/flights', async (req, res) => {
// //   const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; // Replace with your actual API key
// //   const location = req.query.location; // Get 'location' from frontend query params
// //   const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;

// //   try {
// //     const response = await fetch(apiUrl);
// //     const data = await response.json();
// //     res.json(data); // Send data back to frontend
// //   } catch (error) {
// //     console.error('Error fetching flight data:', error);
// //     res.status(500).json({ error: 'Error fetching flight data' });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });

// import express from 'express';
// import fetch from 'node-fetch'; // No need to install fetch separately, it's included
// import cors from 'cors';



// // dotenv.config({
// //     path: './.env'
// // }
// // )

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// const app = express();
// //const port = process.env.PORT || 3000;




// //const app = express();
// const PORT = 5000;

// //app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000' // Your frontend URL
// }));
    
// app.get('/api/flights', async (req, res) => {
//     const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; // Your actual API key 7de0bfa5d6154470e5a56806adeced96
//     const location = req.query.location;
//     const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;
//     console.log(`Fetching flights for location: ${location}`); // Log location query param

//     try {
//         const response = await fetch(apiUrl); //, {mode: 'no-cors'}
//         const data = await response.json();
//         console.log('API Response:', data.data); // Log data from API
//         res.json(data); // Send data back to the frontend
//     } catch (error) {
//         console.error('Error fetching flight data:', error); // Log the error in backend console
//         res.status(500).json({ error: 'Error fetching flight data' });
//     }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // server.js


// const express = require('express');
// const fetch = require('node-fetch'); // If you don't have fetch, install it: npm install node-fetch
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Enable CORS for all routes
// app.use(cors());

// app.get('/api/flights', async (req, res) => {
//   const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; // Replace with your actual API key
//   const location = req.query.location; // Get 'location' from frontend query params
//   const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     res.json(data); // Send data back to frontend
//   } catch (error) {
//     console.error('Error fetching flight data:', error);
//     res.status(500).json({ error: 'Error fetching flight data' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import fetch from 'node-fetch'; // No need to install fetch separately, it's included
import cors from 'cors';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {DB_NAME} from "./constants.js";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({
    path: './.env'
}
)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
//const port = process.env.PORT || 3000;




//const app = express();
const PORT = 5000;


// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection using Mongoose


/*
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST:${connectionInstance.connection.host}`);//to check at which host we are connecting to.
    }catch(error){
        console.log("MongoDB connection error ",error);
        process.exit(1);
    }
}

export default connectDB;

*/
// const mongoUrl = 'mongodb://localhost:27017/flightBooking';
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

const connectDB = async () => {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, )
        .then(() => console.log("\n MongoDB Connected !! DB HOST:"))
        .catch(err => console.error('MongoDB connection error:', err));
}






//Define Mongoose schemas and models
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const bookingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    flightDetails: {
        airline: String,
        flightNumber: String,
        date: String
    }
});

const User = mongoose.model('User', userSchema);
const Booking = mongoose.model('Booking', bookingSchema);

// Register a user
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(200).json({ message: 'Registration successful' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', error: err });
    }
});

// Login a user
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', userId: user._id });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error during login', error: err });
    }
});

// Store a booking
app.post('/api/book-flight', async (req, res) => {
    const { userId, flightDetails } = req.body;
    try {
        const newBooking = new Booking({ userId, flightDetails });
        await newBooking.save();
        res.status(200).json({ message: 'Booking confirmed' });
    } catch (err) {
        res.status(500).json({ message: 'Error booking flight', error: err });
    }
});

// Fetch booking history
app.get('/api/booking-history/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const bookings = await Booking.find({ userId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching bookings', error: err });
    }
});

//Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

//connectDB();



app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000' // Your frontend URL
}));
    
app.get('/api/flights', async (req, res) => {
    const API_KEY = '7de0bfa5d6154470e5a56806adeced96'; // Your actual API key 7de0bfa5d6154470e5a56806adeced96
    const location = req.query.location;
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${location}&limit=5`;
    console.log(`Fetching flights for location: ${location}`); // Log location query param

    try {
        const response = await fetch(apiUrl); //, {mode: 'no-cors'}
        const data = await response.json();
        console.log('API Response:', data.data); // Log data from API
        res.json(data); // Send data back to the frontend
    } catch (error) {
        console.error('Error fetching flight data:', error); // Log the error in backend console
        res.status(500).json({ error: 'Error fetching flight data' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
connectDB();
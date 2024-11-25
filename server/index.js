const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;
const uri = "mongodb+srv://klite:QTMM3HPyKFn9J9lG@klite.w51rv.mongodb.net/klitedb?retryWrites=true&w=majority&appName=klite";

mongoose.connect("mongodb://localhost:27017/klite")
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Schema and Model
const userschema = new mongoose.Schema({
    company: { type: String, required: true },
    names: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    post: { type: String, required: true },
    project: { type: String, required: true },
});

const collection = mongoose.model("enquiry", userschema);

// POST Route
app.post("/klite", async(req, res) => {
    const datas = {
        company: req.body.company,
        names: req.body.names,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        post: req.body.post,
        project: req.body.project,
    };

    try {
        // Save to MongoDB
        const userdata = await collection.create(datas);
        console.log("Data saved to DB:", userdata);

        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });
        const mailOptions = {
            from: datas.email,
            to: 'avskumar82@gmail.com',
            subject: 'job title',
            text: `Hello from sir iam ${datas.names}!
            company:${datas.company}
            name:${datas.names}
            contact:${datas.contact}
            email:${datas.email}
            address:${datas.address} 
            country:${datas.country}
            city:${datas.city} 
            pincode:${datas.post}
            project:${datas.project}
            check the information is right 
            -------thank you----------
            `,
        };


        transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Form submitted and email sent successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Server Error");
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http: //localhost:${port}`);
});
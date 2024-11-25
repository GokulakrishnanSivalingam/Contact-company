const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/gamification")
    .then(() => {
        console.log("Enquiry database connected");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

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

const collection = mongoose.model("enquiries", userschema);

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
                user: "sivalingamgokulakrishnan@gmail.com", // Ensure no spaces in the email
                pass: "#*12345bala", // Replace with the actual password or app-specific password
            },
        });

        const mailOptions = {
            from: `"Form Submission" <sivalingamgokulakrishnan@gmail.com>`,
            to: datas.email,
            subject: "New Form Submission",
            text: `You have a new form submission:
            - Company: ${datas.company}
            - Name: ${datas.names}
            - Contact: ${datas.contact}
            - Address: ${datas.address}
            - Country: ${datas.country}
            - City: ${datas.city}
            - Post: ${datas.post}
            - Project: ${datas.project}`,
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
    console.log(`Server running at http://localhost:${port}`);
});
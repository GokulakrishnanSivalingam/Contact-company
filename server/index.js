const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
const app = express();

const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;


mongoose.connect("mongodb+srv://gokul:1234@cluster0.givgn.mongodb.net/klitedb")
    .then(() => console.log("db connected"))
    .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

const userschema = new mongoose.Schema({
    company: { type: String, required: true },
    names: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    post: { type: Number, required: true },
    project: { type: String, required: true },
});

const collection = mongoose.model("store", userschema);


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

        const userdata = await collection.create(datas);
        console.log("Data saved to DB:", userdata);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },
        });
        const mailOptions = {
            from: 'avskumar82@gmail.com',
            to: datas.email,
            subject: 'job title',
            text: `Hello  ${datas.names}!, you fill the form for your job in our company klite private limited ,
            we acknowledge you, please kindly check your information again 
            -------------------------
            company:${datas.company}
            name:${datas.names}
            contact:${datas.contact}
            email:${datas.email}
            address:${datas.address} 
            country:${datas.country}
            city:${datas.city} 
            pincode:${datas.post}
            project:${datas.project}
            
            we will contact you soon through mobile phone 
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


app.listen(port, () => {
    console.log(`Server running at http: //localhost:${port}`);
});
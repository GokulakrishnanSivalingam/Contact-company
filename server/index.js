const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4000;

const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/gamification");
connect.then(() => {
    console.log("enquiry connected")
})

const userschema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    }


});
const collection = new mongoose.model("enquiries", userschema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
        project: req.body.project
    };

    try {

        const userdata = await collection.create(datas);
        console.log(userdata);
        res.status(200).json();


    } catch (error) {
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
})
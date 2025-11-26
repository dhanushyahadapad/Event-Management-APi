const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');


const app = express();

app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 3000;



// accepts the eventName,date,location and description  in json format and returns a success message
app.post('/api/events', (req, res) => {
    try{
        const {eventName, date, location, description} = req.body;
        if(!eventName || !date || !location || !description){
            return res.status(400).json({error: 'All fields are required'});
        }
        res.status(201).json({message: 'Event created successfully'});
    } catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});
// code for fetching all eventa

app.get('/api/events', (req, res) => {
    try{
        res.status(200).json({events: []});
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});
    
 app.put('/api/events/:id', (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({message: `Event with id ${id} updated successfully`});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.delete('/api/events/:id', (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({message: `Event with id ${id} deleted successfully`});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'}); 
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
"use strict"

import express from 'express';


const port = 5050;
const app = express();

let card_list = [
    {
        "id": "1",
        "name": "Fireball",
        "type": "Fire"
    },
    {
        "id": "2",
        "name": "Snowball",
        "type": "Ice"
    }
    
]

app.use(express.json())


// Get card 
app.get('/cards/:id', (req, res) => {
    const cardId = req.params.id;
    const card = card_list.find(c => c.id === cardId);
    if (!card) {
        res.status(404).json({ message: 'The card does not exist.' });
    } else {
        res.status(200).json(card);
    }
});

// Get card by ID
app.get("/cards/:id", (req, res) => {
    const cardId = req.params.id;
    const card = card_list.find(card => card.id === cardId);
    if (!card) {
        return res.status(404).json({ message: "Card ID not founded" });
    }
    res.status(200).json(card);
});


// Delete a card by ID
app.delete('/cards/:id', (req, res) => {
    const cardId = req.params.id;
    const index = card_list.findIndex(card => card.id === cardId);
    if (index === -1) {
        return res.status(404).json({ message: "The card does not exist" });
    }
    card_list.splice(index, 1);
    res.status(200).json({ message: "The card has been deleted." });
});

// Update card by ID
app.put('/cards/:id', (req, res) => {
    const cardId = req.params.id;
    const updatedFields = req.body;
    const cardIndex = card_list.findIndex(card => card.id === cardId);
    if (cardIndex === -1) {
        return res.status(404).json({ message: "Id card does not exist" });
    }
    Object.assign(card_list[cardIndex], updatedFields);
    res.status(200).json({ message: "Card updated" });
});


app.get("/name", (req, res) => {
    const salute = "Hello from server"
    console.log(req.query)
    res.status(200).send(salute)
});

app.get("/hello/:name", (req, res)=>{
    console.log(req.params)
    const salute = `Hello ${req.params.name}!!`
    res.status(200).send(salute)
});


//Add new card
app.post('/cards', (req, res)=>{
    console.log(req.body)
    card_list.push(req.body)
    res.status(200).send("Card added successfully")
})


app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
});
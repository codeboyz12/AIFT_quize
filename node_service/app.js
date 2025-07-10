const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    res.send('Hello World !');
})

app.get('/callPython', async (req, res) => {
    console.log("Try to get /data from Python Service.");
    try {
        const response = await axios.get('http://python_serivce:5000/data');
        console.log("Get /data successfuly");
        res.send(`Node API received: ${response.data}`);
    } catch(err) {
        res.status(500).send('Error contacting /data from Python Service');
    }
})

app.listen(3000, () => {
    console.log("Node Service are running on port 3000");
})
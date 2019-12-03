const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',async (req,res) => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

    res.send(response.data);
})

app.listen(4000, () => {
    console.log('Listen port 4000...');
});
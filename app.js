const express = require('express');

const app = express();

app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

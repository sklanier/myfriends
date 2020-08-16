const express = require('express');

const app = express();

//ENDPOINTS
app.get('/', (req, res) => res.send('SHES GIVIN IT ALL SHES GAWT'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
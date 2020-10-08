const express = require('express');
const genres = require('./router/genre');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to the port ${port}`));

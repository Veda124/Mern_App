const express = require('express');
const app = express();

app.use(express.json()); // parse JSON first

const userRoutes = require('./routes/user');
app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("port listening on port : ", PORT)
});

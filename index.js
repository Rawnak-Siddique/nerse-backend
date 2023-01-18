import express from "express";
import dotenv from "dotenv";
import DB from './Config/DB.js';
import router from './Route/Routes.js'

const app = express();
dotenv.config();
DB();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`server is up and running on port:- ${PORT}`);
});

app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port:- ${PORT}`));

module.exports = app;
const dotenv = require('dotenv');
const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
dotenv.config();
const app = express();
const pool = new Pool({connectionString: process.env.DATABASE_URL});
pool.connect();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())
app.use(require('body-parser').urlencoded( {extended: false} ))
app.get('/',(req,res)=>{
    res.send('wows');
})
app.get('/api/campsites',(req,res)=>{
    pool.query(`SELECT * FROM campsites ORDER BY id ASC`).then(response=>{
        res.send(response.rows);
    })
})

app.listen(port,()=>{
    console.log('Listening to port ' + port);
})
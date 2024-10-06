//Declare dependences / variables

const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require ('dotenv');
const cors = require('cors')

//call the instances you declared
app.use(express.json());
app.use(cors());
dotenv.config();


//Connect to the databsase (grabs the details from .env file)
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

//Check if db connection works
db.connect((err) =>{
    //No connection
    if(err) return console.log("Error connecting to the database");   
    
    //Yes connected
    console.log("Connected to mysql successfully as id : ",db.threadId)

    //Get method
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');

    //Retrieving patients' Data
    app.get('/patients_data', (req, res) => {
        //retrive data from the database
        db.query('SELECT * FROM patients ORDER BY first_name ASC', (err, results) =>{
            if (err){
                console.error(err);
                res.status(500).send('Error retrieving data');
            }else{
                //display the records
                res.render('patients_data', { results: results});
            }
        });
    });

   //Retrieving providers' data
   app.get('/providers_data', (req, res) => {
    //retrieve requested data from the db
    db.query('SELECT * FROM providers ORDER BY provider_specialty ASC', (err, results) => {
        if (err){
            console.error(err)
            res.status(500).send('Error retrieving data');
        }else{
            //dispaly the requested data
            res.render('providers_data', {results: results});
        }
    });
   });



    //app status
    app.listen(process.env.PORT,() => {
        console.log(`Server listening on port ${process.env.PORT}`);
   
    //Send a message to the browser
    console.log('Sending message to the browser... ')
    app.get('/', (req,res) => {
        res.send('Server started successfully!')
    });
    });
})


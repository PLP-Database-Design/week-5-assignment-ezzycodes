# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   
   // Question 1 goes here
   //ejs file
   <table>
      <thead>
         <tr>
            <th>Patient ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
         </tr>
      </thead>
      <tbody>
         <% results.forEach(row => { %>
            <tr>
               <td><%= row.patient_id %></td>
               <td><%= row.first_name %></td>
               <td><%= row.last_name %></td>
               <td><%= row.date_of_birth %></td>
            </tr>
         <% }); %>
      </tbody>
   </table>

   //js file
   //Retrieving patients' Data
    app.get('/patients_data', (req, res) => {
        //retrive data from the database
        db.query('SELECT * FROM patients', (err, results) =>{
            if (err){
                console.error(err);
                res.status(500).send('Error retrieving data');
            }else{
                //display the records
                res.render('patients_data', { results: results});
            }
        });
    });

   // Question 2 goes here
   // server.js file
   //Retrieving providers' data

   app.get('/providers_data', (req, res) => {
    //retrieve requested data from the db
    db.query('SELECT * FROM providers', (err, results) => {
        if (err){
            console.error(err)
            res.status(500).send('Error retrieving data');
        }else{
            //dispaly the requested data
            res.render('providers_data', {results: results});
        }
    });
   });

   # ejs file
   <table>
      <thead>
         <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
         </tr>
      </thead>
      <tbody>
         <% results.forEach(row => { %>
            <tr>
               <td><%= row.first_name %></td>
               <td><%= row.last_name %></td>
               <td><%= row.provider_specialty %></td>
            </tr>
         <% }); %>
      </tbody>
   </table>


   // Question 3 goes here
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


   // Question 4 goes here
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
   

   // listen to the server
   const PORT = 3300
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository

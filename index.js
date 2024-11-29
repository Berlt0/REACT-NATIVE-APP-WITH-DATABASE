import express from 'express'
import mysql from 'mysql2'
import bodyParser from 'body-parser'
import cors from 'cors'


const PORT = 3001;
const app = express();

app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lezgosqllearn21',
    database: 'mad_db'
})

db.connect((err) => {
    if(err){
        console.log("Error connecting to the database: " ,err)
    }else{
        console.log('Successfully connected to the database')
    }
})

app.get('/registers',(req,res) => {
    db.query('SELECT * from register', (err,results)=> {
        if(err){
            console.log("Error fetching data",err)
            res.send('Error fetching data')
        }else{
            res.send(results)
        }
    })
})

app.post('/register', (req,res) => {
    console.log('Request Body:', req.body);
    const {name, sex , status , email} = req.body;

    if(!name || !sex || !status ||!email){
        return res.status(400).send(`All information are required`)
    }

    const addValue = 'INSERT INTO register(name,sex,status,email) VALUES(?,?,?,?)';
    db.query(addValue,[name,sex,status,email], (err,results) => {

        if(err){
            console.log('Inserting data: ' ,err)
            return res.status(500).send('Registration unsuccessfull')
        }
        res.status(201).send('Registration Successfull')

    }) 
})


app.delete('/register/:id', (req,res) => {
    db.query('DELETE FROM register WHERE id = ?',[req.params.id],(err,rows,fields)=> {
 
        if (!err) {
            if (rows.affectedRows === 0) { // checks if the rows is equal 0
                return res.status(404).send('User form not found, nothing was deleted'); 
            }
            res.send('Deletion Successful.'); 
        } else {
            
            res.status(500).send('Deletion unsuccessful');
        }
    });
});



app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))


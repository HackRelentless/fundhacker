const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors')


const sequelize_connection = new Sequelize('postgres', 'fundhacker', 'fundhackerpass', {
    host: 'postgres',
    dialect: 'postgres'
});

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

app.get('/helloworld', (req, res) => {
    res.send('hello world from backend~~~~~~~!!!');
})

sequelize_connection.authenticate()
    .then(() => { console.log('Database connected!') })
    .catch(error => { console.error(error); });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
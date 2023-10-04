const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


//IMPORT ROUTES
const todos = require('./routes/todoRoutes');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));
app.use(cors());

//ROUTE MIDDLEWARE
app.use('/api', todos);

//PORT
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
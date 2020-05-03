const express = require('express');
var helmet = require('helmet');
const connectDB = require('./config/db');
const app = express();

const auth = require('./src/routes/auth.route');
const personalNotes = require('./src/routes/personalNotes.route');
const project = require('./src/routes/project.route');
const user = require('./src/routes/user.route');
const directory = require('./src/model/directory.model');

// Middleware
app.use('/public', express.static('./stat'));
app.disable('x-powered-by');
app.use(helmet());
app.use(express.urlencoded({limit: '20mb', extended: true}));
app.use(express.json({limit: '20mb'}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// ROUTE
app.use('/auth', auth);
app.use('/personalnotes', personalNotes);
app.use('/projects', project);
app.use('/users', user);
app.use('/directory', directory);

// Connect to the database
connectDB();

// Get the port env variable or default 5000
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

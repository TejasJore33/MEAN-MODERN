const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const http = require('http');
const Applicant = require('./models/applicantSchema');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/ModernClg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

const server = http.createServer(app);

app.listen(port, () => {
    console.log('Backend running on port:', port);
});

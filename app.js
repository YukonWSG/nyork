const express = require('express');
const bodyParser = require('body-parser');

// Routes Here
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const userDepartment = require('./routes/userDepartment');
const userCourse = require('./routes/userCourse');
const userStudent = require('./routes/userStudent');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Daniel Bonito');
});

// Endpoint Here
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/dept', userDepartment);
app.use('/api/cor', userCourse);
app.use('/api/stu', userStudent);

const PORT = 5001;
app.listen(PORT, () => {
  console.log('Working on port', PORT);
});
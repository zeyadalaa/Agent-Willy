const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Agent-Willy'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});


app.use('/api/auth', authRoutes);

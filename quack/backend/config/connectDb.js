const mongoose = require('mongoose');

const connectDb = async () => {
    const connectionString = 'mongodb+srv://vigneshyellapu:Vignesh$202251161@benzene.qmksw7d.mongodb.net/';
    
    try {
        // Connect to the MongoDB database using the provided connection string
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the MongoDB database successfully!');
    } catch (error) {
        console.error('Failed to connect to the MongoDB database:', error);
    }
};

module.exports = connectDb;
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/foodData';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

  });

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
});
  
mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
    console.log('Mongoose is disconnected')
});
const mongoose = require ('mongoose')
requre ('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
  
module.exports = mongoose.connection;

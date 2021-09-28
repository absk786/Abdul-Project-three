const mongoose = require ('mongoose')
require ('dotenv').config()
mongoose.connect('mongodb://localhost/Project3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
  
module.exports = mongoose.connection;
// process.env.MONGODB_URI || 
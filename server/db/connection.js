const mongoose = require ('mongoose');

//This must be called because mongoose's promises library is deprecated
mongoose.Promise = global.Promise;
 
const mongodbUri = 'mongodb://Robin:robin1@ds119588.mlab.com:19588/debuggerduck';
mongoose.connect(mongodbUri);

const conn = mongoose.connection;   
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
module.exports = conn;

//FYI, if you want play with the data in the command line, use this:
// mongo ds119588.mlab.com:19588/debuggerduck -u Robin -p robin1
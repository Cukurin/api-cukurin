const mongoose = require("mongoose");
const {MONGOOSE_DB, MONGOOSE_CONNECTION} = require("./variableEnv");

// Untuk konek ke atlas
const CONNECTION = MONGOOSE_CONNECTION|| `mongodb://localhost:27017/${MONGOOSE_DB}`

// Untuk konek ke local
// const CONNECTION = `mongodb://localhost:27017/${MONGOOSE_DB}`

mongoose.connect(CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify: false
});
  
const db = mongoose.connection;

module.exports = db;

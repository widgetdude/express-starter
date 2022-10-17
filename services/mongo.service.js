const mongoose = require("mongoose");
const winston = require("winston");

const connect = async () => {
  const { MONGO_DB_USER, MONGO_DB_PASS, MONGO_DB_HOST, MONGO_DB_NAME } =
    process.env;
  if (!MONGO_DB_USER || !MONGO_DB_PASS || !MONGO_DB_HOST || !MONGO_DB_NAME) {
    winston.error("Missing mongoose env variables");
    return null;
  }
  const uri = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    winston.info("Connected to MongoDB");
  } catch (error) {
    winston.error(error);
  }
};

module.exports = { connect };

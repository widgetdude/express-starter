require('dotenv').config();
require('util').inspect.defaultOptions.depth = null;
const logger = require('./services/logger.service');
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await require('./services/mongo.service').connect();
    server.listen(port, () => {
      logger.info(`Server is up on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();

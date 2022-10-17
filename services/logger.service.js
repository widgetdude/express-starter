const winston = require("winston");
const { createLogger, format, transports } = winston;
const {
  combine,
  timestamp,
  label,
  printf,
  json,
  simple,
  prettyPrint,
  colorize,
} = format;

const myTransports = {
  console: new transports.Console(),
  file: new transports.File({ filename: "logs/app.log" }),
};

const getFileName = () => {
  function printStackTrace() {
    const error = new Error();
    console.log(error.stack);
    const stack = error.stack
      .split("\n")
      .slice(2)
      .map((line) => line.replace(/\s+at\s+/, ""))
      .join("\n");
    const stackArray = stack.split("\n");
    const returnStack = stackArray.splice(0, 1);
    const regex = /\/(\w+).js/gm;
    //console.log(stackArray);
    const found = stackArray[0]
      .match(regex)[0]
      .replace("/", "")
      .replace(".js", "");
    return found;
  }
  try {
    return printStackTrace();
  } catch (error) {}
};

const myFormat = printf(({ level, message, label, timestamp }) => {
  const file = getFileName();
  console.log(file);
  return `${timestamp} [${label}] ${level}: ${message}`;
});

winston.configure({
  level: "info",
  transports: [myTransports.console, myTransports.file],
  format: combine(
    //colorize(),
    //label({ label: "right meow!" }),
    timestamp(),
    prettyPrint()
  ),
  exitOnError: false,
});

module.exports = winston;

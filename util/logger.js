/*
  util/logger.js

  Winston logger that the bot uses. Edit this file to change the default
  transports.
*/

var util = require('util');
var winston = require('winston');

// Change the Date timestamp
Date.prototype.now = function() {
  return 'hi';
};

// Formatted timestamp
var timeFormat = function() {
  return new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '');
};

// Formatted log message
var formatter = function(options) {
  var logMsg = options.timestamp() + ' ' + options.level.toUpperCase() + ' ' +
    (undefined !== options.message ? options.message: '') +
    (options.meta && Object.keys(options.meta).length ? '\n\t' +
    JSON.stringify(options.meta) : '');
  return logMsg;
};

var fileDebugTransport = new (winston.transports.File)({
  name: 'debug-file',
  filename: 'filelog-debug.log',
  level: 'debug',
  timestamp: timeFormat,
  formatter: formatter
});

var fileInfoTransport = new (winston.transports.File)({
  name: 'info-file',
  filename: 'filelog-info.log',
  level: 'info',
  timestamp: timeFormat,
  formatter: formatter,
  json: false,
  prettyPrint: true
});

var fileErrorTransport = new (winston.transports.File)({
  name: 'error-file',
  filename: 'filelog-error.log',
  level: 'error',
  timestamp: timeFormat,
  formatter: formatter
});

var consoleTransport = new (winston.transports.Console)({
  name: 'console',
  level: 'debug',
  timestamp: timeFormat,
  formatter: formatter
});

var logger = new (winston.Logger)({
  transports: [
    // Add any transports here
    // fileInfoTransport,
    consoleTransport
  ]
});

module.exports = logger;

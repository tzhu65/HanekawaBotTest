/*
  hanekawa_bot.js

  Main bot file. Check out the github page for more info.
*/

// ----------------------------------------------------------------------------
// Initialize

try {
  // Imports
  var hs = require('fs');
  var path = require('path');
  var npid = require('npid');

  // Globals
  startTime = Date.now();
  commands = {};
  log = require('./util/logger');

  // Bot client
  var Discord = require('discord.js');
  var bot = new Discord.Client();
} catch (e) {
  console.log(e.stack);
  console.log(process.version);
  console.log('Please run npm install and make sure it has no errors.');
  process.exit();
}

// ----------------------------------------------------------------------------
// Load configs

// Probably gonna either be reading a json file or from mongodb

// ----------------------------------------------------------------------------
// Load plugins/commands once the bot is ready

var loadPlugins = function() {
  try {
    // Load previously opened plugins

  } catch (e) {
    log.error(e.stack);
    log.error('Error loading plugins');
    log.warn('Exiting.');
    process.exit(1);
  }
};

// ----------------------------------------------------------------------------
// Discordjs handlers

bot.on('ready', function() {
  loadPlugins();
  log.info('Connected on: ' + Date.now());
  log.info('Serving in ' + bot.channels.length + ' channels.');
});

bot.on('disconnected', function() {
  log.info('Disconnected!');
  log.warn('Exiting.');
  process.exit(0);
});

bot.on('warn', function(e) {
  log.warn(e);
  log.warn('Detected an error that could have been avoided.');
});

bot.on('error', function(e) {
  log.error(e.stack);
  log.error(e);
  log.warn('Exiting.');
  process.exit(1);
});

bot.on('message', function(msg) {

  log.info('Received message: ' + msg);
});

// ----------------------------------------------------------------------------
// Start the bot
var botEmail = '';
var botPassword = '';
bot.login(botEmail, botPassword, function(e, token) {
  if (e) {
    log.error(e.stack);
    log.error('Could not login');
    log.warn('Exiting.');
    process.exit(1);
  } else {
    log.info('Bot started on: ' + Date.now());
  }
});

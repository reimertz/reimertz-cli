#!/usr/bin/env node
const fs = require('fs')
const CliFrames = require("cli-frames")
const frames = JSON.parse(fs.readFileSync(__dirname + '/frames.json'))
const Table = require('cli-table');

new CliFrames({
  frames,
  autostart: {
    repeat: true,
    delay: 0
  }
})

function exitHandler(options, err) {
  if (err) console.log(err.stack);
  if (options.exit) {
    const table = new Table({
      chars: {
        'mid': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': ''
      }
    })
    table.push([
      'Piérre Reimertz',
      'https://reimertz.co',
      'https://github.com/reimertz',
      'https://twitter.com/reimertz'
    ])

    console.log(table.toString() + '\n');
    process.exit();
  }
}

process.on('exit', exitHandler.bind(null,{cleanup:true}));
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

const model = require('@magenta/music/node/music_vae');
const core = require('@magenta/music/node/core');

// These hacks below are needed because the library uses performance and fetch which
// exist in browsers but not in node. We are working on simplifying this!
const globalAny: any = global;
globalAny.performance = Date;
globalAny.fetch = require('node-fetch');

// Your code:
const model = new mode.MusicVAE('/path/to/checkpoint');
const player = new core.Player();
model
  .initialize()
  .then(() => model.sample(1))
  .then(samples => {
    player.resumeContext();
    player.start(samples[0])
  });
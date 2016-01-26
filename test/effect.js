'use strict';

// external modules
const expect  = require('expect.js');

// sanity-engine module index
const engine  = require(process.cwd());

// engine modules
const help    = engine.helper;
const config  = engine.config;
const effect  = engine.effect;

describe('effect', function () {
  it('should initialize with default values', function () {
    const e = effect();

    expect(e.name).to.eql(config.effect.name)
    expect(e.pools).to.eql(config.effect.pools)
  });
});

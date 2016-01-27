'use strict';

const expect  = require('expect.js');

const engine = require(process.cwd());

const config    = engine.config;
const skill     = engine.skill;

describe('skill', function () {
  describe('#constructor', function () {
    it('should initialize with default values', function () {
      var s = skill();

      expect(s.name).to.be(config.skill.name);
      expect(s.pools).to.eql(config.skill.pools);
      expect(s.effects).to.eql(config.skill.effects);
    });
  });
});

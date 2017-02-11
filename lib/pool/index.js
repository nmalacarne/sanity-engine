'use strict';

const help    = require('helper');
const config  = require('config');
const Pool    = require('./Pool');

/**
 * @module pool
 * @param {Object} spec
 * @param {Number} spec.min The lower limits for the value
 * @param {Number} spec.max The upper limits for the value
 * @param {Number} spec.val The default starting value
 */
module.exports = exports = function factory (spec) {
    spec = help.define(spec).or.use({});

    spec.min = help.define(spec.min).or.use(config.pool.min);
    spec.max = help.define(spec.max).or.use(config.pool.max);
    spec.val = help.define(spec.val).or.use(config.pool.max);

    // ensure that min is less than max
    [spec.min, spec.max] = help.sort([spec.min, spec.max]);

    spec.val = help.limit(spec.val).within(spec.min, spec.max);

    return new Pool(spec.min, spec.max, spec.val);
}

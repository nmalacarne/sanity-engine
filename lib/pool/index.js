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
module.exports = exports = function pool (spec) {
    spec = help.define(spec).or.use({});

    spec.min = help.define(spec.min).or.use(config.pool.min);
    spec.max = help.define(spec.max).or.use(config.pool.max);
    spec.val = help.define(spec.val).or.use(config.pool.max);
    spec.val = help.limit(spec.val).within(spec.min, spec.max);

    if (spec.min > spec.max) {
      let temp = spec.min;

      spec.min = spec.max;
      spec.max = temp;
    }

    return new Pool(spec);
}

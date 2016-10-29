'use strict';

/**
 * @module helper
 */
module.exports = exports;

/**
 * Ensures that a value is within a min/max range.
 *
 * @param   {Number} val
 *
 * @return {Object}
 */
exports.limit = val => {
  return {
    within (min, max) {
      return Math.min(Math.max(val, min), max);
    }
  };
}

/**
 * Ensures that a value is not undefined.
 *
 * @param   {Mixed} value     The value to check
 * @param   {Mixed} fallback  The fallback value
 *
 * @return  {Mixed} Either the value if defined or the fallback value
 */
exports.define = val => {
  return {
    or: {
      use (fallback) {
        return (typeof val === 'undefined') ? fallback : val;
      }
    }
  };
}

/**
 * @param   {Function}  module
 * @param   {Object}    spec
 *
 * @return  {Object}
 */
exports.createMany = createMany;
function createMany(module) {
  const object = {};

  return {
    from: function (spec) {
      for (let key in spec) {
        object[key] = module(spec);
      }

      return object;
    }
  };
}

/**
 * Convert an object's constructor function into a string,
 * slices the function name from the string, and then returns
 * the lowercase form.
 *
 * @parameter  {Object} object
 *
 * @return  {String}
 */
exports.getKlass = object => {
  const len = 'function '.length

  return object.constructor.toString().split('(').shift().slice(len).toLowerCase();
}

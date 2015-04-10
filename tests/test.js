'use strict';



var expect = require('chai').expect;


it('[sync] should be an array with content 1 & 2 & 3', function(done) {
  var result = [];

  require('../sequeue')([
    function(next) {
      result.push(1);
      next();
    },
    function(next) {
      result.push(2);
      next();
    },
    function(next) {
      result.push(3);
      next();
    },
    function(next) {
      expect(result).to.be.an('array');
      expect(result).to.deep.equal([1, 2, 3]);

      done();
      next();
    }
  ]);
});

it('[async] should be an array with content 1 & 2 & 3', function(done) {
  var result = [];

  require('../sequeue')([
    function(next) {
      setTimeout(function() {
        result.push(1);
        next();
      }, 1000);
    },
    function(next) {
      result.push(2);
      next();
    },
    function(next) {
      result.push(3);
      next();
    },
    function(next) {
      expect(result).to.be.an('array');
      expect(result).to.deep.equal([1, 2, 3]);

      done();
      next();
    }
  ]);
});

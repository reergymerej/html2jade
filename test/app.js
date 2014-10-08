'use strict';

var mocha = require('mocha');
var willy = require('willy');
var will = willy.will;
var app = require('../app.js');

describe('sanity', function () {
    it('should exist', function () {
        will(app).exist();
    });
});
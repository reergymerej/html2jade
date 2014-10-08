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

xdescribe('finding html documents', function () {
});

describe('converting html', function () {
    it('should return the jade equivalent', function (done) {
        var html =
            '<html>' +
            '    <body>' +
            '        <div id="content"></div>' +
            '    </body>' +
            '</html>';

        var jade = 
            'html' +
            '    body' +
            '        div#content';

        will(app.convert(html)).be(jade);
    });
});
'use strict';

var jsdom = require('jsdom');

// find the target html
// read the html
// convert to jade
// write results
// specify indentation size/type

/**
* Convert an html string to a jade string.
* @param {String} html
* @return {Strig}
*/
var convert = function (html) {
/*
'<html>' +
'    <body>' +
'        <div id="content"></div>' +
'    </body>' +
'</html>'


================================================

'html' +
'    body' +
'        div#content';

*/

    var jade = '';

    // convert the html into a document
    var doc = jsdom.jsdom(html);

    // TODO: Parse the document now that it's in a reliable shape
    // and write the jade.
    jade = jsdom.serializeDocument(doc);

    return jade;
};

exports.convert = convert;
const url = require('url');

const myURL = new URL('https://example.org');
myURL.pathname = '/shashank';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
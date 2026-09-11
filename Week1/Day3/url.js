// url modules 
const { log } = require('console');
const {URL}=require ('url')

const parseURL = new URL('https://example.com:8080/path/name?category=mobie&&price=100000');

console.log(parseURL);
console.log(parseURL.hostname);
console.log(parseURL.port);
console.log(parseURL.search);
console.log(parseURL.pathname);
console.log(parseURL.searchParams.get('category'));
parseURL.searchParams.append('brand','samsung')
console.log(parseURL.href);

parseURL.searchParams.delete('category')
console.log(parseURL.href);








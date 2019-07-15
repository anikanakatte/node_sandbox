const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=true"
);

//serialized url (straight up url)
console.log(myUrl.href);
console.log(myUrl.toString());

//host
console.log(myUrl.host);

//hostname (doesn't get status code)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query (query string)
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append("abc", "1234");
console.log(myUrl.searchParams);

//looping through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

/*var URL = require("url").URL;
const myURL = new URL("https://example.org:8888");
console.log(myURL.port);
myURL.port = "443";
console.log(myURL.port);
myURL.port = 1234;
console.log(myURL.port);
console.log(myURL.href);*/

/*console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve(3).then(console.log);
console.log(4);*/

const dns = require("dns");

dns.reverse("8.8.8.8", (err, hostnames) => {
  if (err) throw err;

  console.log(hostnames);
});

//automatically download images from a website
//AI generated code

const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

// Set the URL of the website you want to download images from
const url = "https://www.cbdheadquartersemporium.com/shop";

const options = {
  url: urls[i],
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  },
};

// Send a GET request to the URL
request(url, options, (error, response, body) => {
  console.log("started");
  if (error) {
    console.error(error);
    return;
  }

  // Parse the HTML content of the website
  const $ = cheerio.load(body);

  // Find all the image tags in the HTML and extract the URLs of the images
  const images = $("img");
  const urls = [];
  for (let i = 0; i < images.length; i++) {
    const url = images[i].attribs.src;
    if (url) {
      console.log("gotten");
      //urls.push(url);
      const size = "large"; // specify the desired image size
      const modifiedUrl = url.replace(/(\/images\/)(.*)/, `$1${size}/$2`);
      urls.push(modifiedUrl);
    }
  }

  // Create a directory to save the downloaded images
  fs.mkdirSync("imagess", { recursive: true });

  // Download the images to the local machine
  for (let i = 0; i < urls.length; i++) {
    //console.log(urls);

    const filename = "imagess/" + urls[i].split("/").pop();
    request(urls[i]).pipe(fs.createWriteStream(filename));
    console.log(`Downloaded ${filename}`);
  }
});

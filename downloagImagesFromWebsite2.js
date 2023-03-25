const puppeteer = require("puppeteer");
const fs = require("fs");

/*(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.cbdheadquartersemporium.com/shop");

  const imageUrls = await page.$$eval("img", (imgs) =>
    imgs.map((img) => img.src)
  );

  // Create a directory for the downloaded images
  if (!fs.existsSync("images2")) {
    fs.mkdirSync("images2");
  }

  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i];
    const imagePage = await browser.newPage();
    await imagePage.goto(imageUrl, { waitUntil: "networkidle2" });

    const buffer = await imagePage.screenshot({ encoding: "binary" });
    const filename = `images2/image-${i}.png`;
    fs.writeFileSync(filename, buffer, "binary");
    console.log(`Downloaded ${filename}`);

    await imagePage.close();
  }

  await browser.close();
})();*/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.cbdheadquartersemporium.com/shop");

  const imageLinks = await page.$$eval("img", (imgs) =>
    imgs.map((img) => img.parentNode.href)
  );

  // Create a directory for the downloaded images
  if (!fs.existsSync("images3")) {
    fs.mkdirSync("images3");
  }

  for (let i = 0; i < imageLinks.length; i++) {
    const imageLink = imageLinks[i];
    const imagePage = await browser.newPage();
    await imagePage.goto(imageLink, { waitUntil: "networkidle2" });

    const imageUrl = await imagePage.$eval("img", (img) => img.src);
    const response = await imagePage.goto(imageUrl);

    const buffer = await response.buffer();
    const filename = `images2/image-${i}.png`;
    fs.writeFileSync(filename, buffer);
    console.log(`Downloaded ${filename}`);

    await imagePage.close();
  }

  await browser.close();
})();

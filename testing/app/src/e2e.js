const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    // headless: false will open the browser window for you to see
    // what's happening in the browser while the tests are running
    headless: false,
    // window size set
    args: ["--window-size=1920,1080"],
    // slowMo: 100 will slow down the puppeteer operations by 100ms
    slowMo: 100,
  });

  // open a new blank page
  const page = await browser.newPage();
  // navigate to the page
  await page.goto("https://namastedev.com/");
  console.log(`Navigated to ${await page.title()}`);

  // set the viewport size
  await page.setViewport({ width: 1920, height: 1080 });

  // get the link from dom
  const coursesPageLink = ".menu > li:nth-child(2) > a";
  // wait for the element to be visible
  await page.waitForSelector(coursesPageLink);
  // click on the link
  await page.click(coursesPageLink);

  console.log(`Navigated to ${await page.title()}`);

  // get the btn
  const enrollButton = ".bg-success-btn";
  // wait for the element to be visible
  await page.waitForSelector(enrollButton);
  // click on the link
  await page.click(enrollButton);

  console.log(`Navigated to ${await page.title()}`);

  // close the browser
  await browser.close();
})();

// automate the whole user journey in favourite browser
// run the script everyday at 9am
// run the script on every push to the repo to make sure the user journey is working fine
// collect all the logs and send it to the email
// integrate to amazon ec2 instance

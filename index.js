const puppeteer = require('puppeteer');
require('dotenv').config();


const hackclubSignup = async () => {
  // Launch browser
  const browser = await puppeteer.launch({ headless: false }); // Set headless to true for production  // Open a new page
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  try {
    // Navigate to hackclub.com
    await page.goto('https://hackclub.slack.com/sign_in_with_password?redir=%2Fadmin');

    // Click on the Slack link
    // Wait for the Slack page to load
    await page.waitForTimeout(2000);

    // Fill out the signup form
   await page.locator('input[type="email"]').fill(process.env.EMAIL);
   await page.locator('input[type="password"]').fill(process.env.PASSWORD)

 await page.locator('button[type="submit"]').click();


 
    console.log('Signup successful!');
  } catch (error) {
    console.error('Error during signup:', error);
  } finally {
    // Close the browser
setTimeout(() => {
  browser.close()
}, 500000);
   
  }
};

hackclubSignup();

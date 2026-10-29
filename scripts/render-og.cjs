// Renders scripts/og-image.html to public/og-default.png with Playwright's Chromium.
const { chromium } = require('playwright');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto('file://' + path.join(__dirname, 'og-image.html'));
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'og-default.png') });
  await browser.close();
})();

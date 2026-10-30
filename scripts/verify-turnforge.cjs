const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

async function main() {
  const baseUrl = process.argv[2] || 'http://127.0.0.1:3015';
  const output = path.join(__dirname, '../.next/turnforge-qa');
  fs.mkdirSync(output, { recursive: true });
  const chrome = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const browser = await chromium.launch({ headless: true, ...(fs.existsSync(chrome) ? { executablePath: chrome } : { channel: 'chrome' }) });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const gameFilter = page.getByRole('button', { name: /Game Dev/ });
    await gameFilter.focus();
    await page.keyboard.press('Enter');
    assert.equal(await gameFilter.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('article').count(), 1);
    await page.getByRole('link', { name: 'Read Turnforge case study' }).click();
    await page.waitForURL('**/work/turnforge');
    await page.getByRole('heading', { name: 'Watch the gameplay' }).scrollIntoViewIfNeeded();
    await page.locator('video').evaluate(async video => {
      if (video.readyState < 1) await new Promise((resolve, reject) => {
        video.addEventListener('loadedmetadata', resolve, { once: true });
        video.addEventListener('error', reject, { once: true });
      });
      video.muted = true;
      await video.play();
    });
    await page.waitForFunction(() => document.querySelector('video')?.currentTime > 0.1, null, { timeout: 15000 });
    await page.locator('video').evaluate(video => video.pause());
    const media = await page.locator('video').evaluate(video => ({ width: video.videoWidth, height: video.videoHeight, duration: video.duration, currentTime: video.currentTime, ratio: video.clientWidth / video.clientHeight }));
    assert.equal(media.width, 1280);
    assert.equal(media.height, 720);
    assert.ok(Math.abs(media.duration - 66) < 0.1);
    assert.ok(media.currentTime > 0);
    assert.ok(Math.abs(media.ratio - 16 / 9) < 0.02);
    assert.equal(await page.getByRole('link', { name: 'Download Windows ZIP', exact: true }).getAttribute('href'), 'https://github.com/a1fariz/turnforge/releases/download/v0.5.1/Turnforge-Windows.zip');
    await page.screenshot({ path: path.join(output, 'desktop.png') });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(new URL('/work/turnforge', baseUrl).href, { waitUntil: 'networkidle' });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.getByRole('heading', { name: 'Watch the gameplay' }).scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, 'mobile.png') });
    await page.goto(new URL('/work/catat-uang', baseUrl).href, { waitUntil: 'networkidle' });
    await page.getByRole('heading', { name: 'See the app in use' }).scrollIntoViewIfNeeded();
    assert.ok(await page.locator('video').evaluate(video => video.clientWidth < video.clientHeight));
    assert.ok(await page.getByText('Sample transactions and recurring bills in the real Flutter interface.').isVisible());
    assert.deepEqual(errors, []);
    const result = { passed: true, baseUrl, video: media, mobileOverflow: false, existingPortraitCasePreserved: true, pageErrors: errors };
    fs.writeFileSync(path.join(output, 'verification.json'), JSON.stringify(result, null, 2) + '\n');
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });

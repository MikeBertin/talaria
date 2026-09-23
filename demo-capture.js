// TALARIA demo capture. Copied from stoa/tools/capture/demo-capture.js and
// filled in. Serve the site on :8191 first (launch.json "talaria"), then:
//   NODE_PATH=../ventris/node_modules node demo-capture.js
//   ffmpeg -i demo.webm -vf "fps=12,scale=720:-1:flags=lanczos,palettegen" pal.png
//   ffmpeg -i demo.webm -i pal.png -filter_complex "fps=12,scale=720:-1:flags=lanczos[x];[x][1:v]paletteuse" web/demo.gif
const { chromium } = require('playwright');
const fs = require('fs');
const BASE = process.env.BASE || 'http://localhost:8191';
const OUT = process.env.OUT_DIR || '.';
const W = 1100, H = 700;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function goto(page, path) { await page.goto(BASE + path, { waitUntil: 'networkidle' }); await sleep(600); await pin(page); }
async function pin(page) { await page.evaluate(() => window.scrollTo(0, 150)); await sleep(150); }
async function sweepRange(page, sel, ms = 1600) {
  const { min, max, step } = await page.$eval(sel, el => ({ min: +el.min, max: +el.max, step: +el.step || 1 }));
  const frames = 30;
  for (let i = 0; i <= frames * 2; i++) {
    const t = i <= frames ? i / frames : 2 - i / frames;
    const v = Math.round((min + t * (max - min)) / step) * step;
    await page.$eval(sel, (el, val) => { el.value = val; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, v);
    await sleep(ms / (frames * 2));
  }
}
async function rampRange(page, sel, from, to, ms = 1200) {
  const frames = 24;
  for (let i = 0; i <= frames; i++) {
    const v = from + (to - from) * (i / frames);
    await page.$eval(sel, (el, val) => { el.value = val; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); }, v);
    await sleep(ms / frames);
  }
}
(async () => {
  const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, recordVideo: { dir: OUT, size: { width: W, height: H } } });
  const page = await ctx.newPage();
  await goto(page, '/'); await sleep(1400);
  await goto(page, '/demos/antitelephone.html');
  await rampRange(page, '#v', 0, 95, 1600);
  await page.click('#frameSeg button[data-frame="b"]'); await pin(page); await sleep(1200);
  await page.click('#frameSeg button[data-frame="a"]'); await pin(page); await sleep(600);
  await goto(page, '/demos/alcubierre-bubble.html');
  await rampRange(page, '#A', 0, 150, 1800);
  await page.click('#viewSeg button[data-view="theta"]'); await pin(page); await sleep(1200);
  await page.click('#viewSeg button[data-view="rho"]'); await pin(page); await sleep(1000);
  await goto(page, '/demos/wormhole.html'); await sleep(800);
  await rampRange(page, '#b0', 0, 100, 1400).catch(() => {});
  await goto(page, '/timeline.html'); await page.evaluate(() => window.scrollTo(0, 120)); await sleep(1400);
  await page.click('#spanSeg button:nth-child(2)').catch(() => {}); await sleep(1400);
  await goto(page, '/atlas.html#join'); await page.evaluate(() => window.scrollTo(0, 260)); await sleep(1600);
  const video = page.video();
  await ctx.close(); await browser.close();
  const p = await video.path(); fs.renameSync(p, 'demo.webm'); console.log('video written to demo.webm');
})();

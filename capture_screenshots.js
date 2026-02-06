const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
    { name: 'matchly_ai', url: 'https://matchly-ai.vercel.app/' },
    { name: 'leadpilot_ai', url: 'https://lead-pilot-ai-coral.vercel.app/' },
    { name: 'petspeak_ai', url: 'https://pet-voice-translator.vercel.app' },
    { name: 'intellihire_ai', url: 'https://intelli-hire-ai.vercel.app/' },
    { name: 'authboard', url: 'https://auth-board-red.vercel.app/' },
    { name: 'aptiarena', url: 'https://apti-arena.vercel.app/' },
    { name: 'pixee', url: 'https://pixee-au4y.vercel.app' },
    { name: 'gitgrade_ai', url: 'https://git-grade-ai.vercel.app' },
    { name: 'daily_motivator', url: 'https://daily-motivator-web-application.vercel.app' }
];

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    // Set viewport to a reasonable desktop size
    await page.setViewport({ width: 1280, height: 800 });

    const imagesDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
    }

    for (const project of projects) {
        try {
            console.log(`Navigating to ${project.name} (${project.url})...`);
            await page.goto(project.url, { waitUntil: 'networkidle0', timeout: 60000 });

            // Wait a bit more for any animations or lazy loaded content
            await new Promise(r => setTimeout(r, 2000));

            const screenshotPath = path.join(imagesDir, `${project.name}.png`);
            await page.screenshot({ path: screenshotPath });
            console.log(`Saved screenshot to ${screenshotPath}`);
        } catch (error) {
            console.error(`Failed to capture ${project.name}:`, error.message);
        }
    }

    await browser.close();
    console.log('Done.');
})();

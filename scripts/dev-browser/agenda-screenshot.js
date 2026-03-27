const page = await browser.getPage("workspace-local");

await page.goto("http://localhost:3000/agenda");

const path = await saveScreenshot(await page.screenshot(), "agenda-home.png");

console.log(path);

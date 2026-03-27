const page = await browser.getPage("workspace-local");

await page.goto("http://localhost:3000/agenda");

const snapshot = await page.snapshotForAI({ depth: 2 });

console.log(snapshot.full);

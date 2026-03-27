const page = await browser.getPage("workspace-local");

await page.goto("http://localhost:3000/agenda");
await page.getByRole("button", { name: "Today" }).click();
await page.getByRole("button", { name: "School" }).click();

console.log(
  JSON.stringify(
    {
      url: page.url(),
      visibleCards: await page.locator("article").count()
    },
    null,
    2
  )
);

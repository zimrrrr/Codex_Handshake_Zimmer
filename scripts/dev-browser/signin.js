const page = await browser.getPage("workspace-local");

await page.goto("http://localhost:3000/signin");

console.log(
  JSON.stringify(
    {
      url: page.url(),
      title: await page.title()
    },
    null,
    2
  )
);

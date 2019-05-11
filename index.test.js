it('should contain the text "Hello, world"', async () => {
  const port = process.env.PORT || 3000;
  await page.goto('http://localhost:' + port);
  await expect(page).toMatch('Hello, world')
});

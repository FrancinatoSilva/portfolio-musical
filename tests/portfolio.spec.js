import { test, expect } from "@playwright/test";

const sizes = [
  [375, 812],
  [390, 844],
  [768, 1024],
  [1280, 900],
  [1440, 900],
];
for (const [width, height] of sizes) {
  test(`layout e recursos em ${width}px`, async ({ page }, testInfo) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(
      page.getByRole("heading", { name: "FRANCIS LEAN", exact: true }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page.evaluate(
        () =>
          document.fonts.check("16px Anton") &&
          document.fonts.check("16px Inter"),
      ),
    ).toBe(true);
    for (const img of await page.locator("img").all()) {
      if (!(await img.isVisible())) {
        // The approved layout hides this decorative inset on mobile.
        expect(
          await img.evaluate((node) =>
            Boolean(node.closest(".live-heading-inset")),
          ),
        ).toBe(true);
        continue;
      }
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty("complete", true);
      expect(await img.evaluate((node) => node.naturalWidth)).toBeGreaterThan(
        0,
      );
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: testInfo.outputPath(`pagina-${width}.png`),
      fullPage: true,
    });
    expect(errors).toEqual([]);
  });
}

test("navegação, destinos aprovados e conteúdo público", async ({ page }) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const nav = page.getByRole("navigation", { name: "Seções" });
  await expect(nav.getByRole("link")).toHaveCount(3);
  for (const [name, id] of [
    ["Aulas", "aulas"],
    ["Gravações", "gravacoes"],
    ["Ao vivo", "ao-vivo"],
  ]) {
    await nav.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    const top = await page
      .locator(`#${id}`)
      .evaluate((node) => node.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(0);
    expect(top).toBeLessThan(110);
    await page.evaluate(() => scrollTo(0, 0));
  }
  const whatsapps = await page
    .locator('a[href^="https://wa.me/"]')
    .evaluateAll((nodes) => nodes.map((a) => a.href));
  expect(whatsapps).toHaveLength(4);
  expect(new Set(whatsapps).size).toBe(2);
  for (const url of whatsapps) {
    const parsed = new URL(url);
    expect(parsed.pathname).toBe("/5585991006505");
    expect([
      "Olá, Francis! Gostaria de saber mais sobre suas aulas.",
      "Olá, Francis! Gostaria de conversar sobre uma gravação.",
    ]).toContain(parsed.searchParams.get("text"));
  }
  const hrefs = await page
    .locator("a")
    .evaluateAll((nodes) => nodes.map((a) => a.getAttribute("href")));
  for (const id of ["NI2j37_aryg", "aH9mA-sjPmM", "OOWr9yPmGic", "XbJEBd3scwI"])
    expect(hrefs).toContain(`https://www.youtube.com/shorts/${id}`);
  for (const url of [
    "https://www.youtube.com/watch?v=n0s-anYQ6JM",
    "https://www.youtube.com/watch?v=0npdnoTvC6w",
    "https://open.spotify.com/track/16E01du9R8ONkdzyXSjMkm",
    "https://open.spotify.com/track/4rLmzMvAVfOSbJDdpKwQUd",
    "https://www.instagram.com/francisllean/",
    "https://www.youtube.com/@francislean",
  ])
    expect(hrefs).toContain(url);
  for (const href of hrefs) expect(href).toMatch(/^(https:\/\/|#\w)/);
  await expect(page.locator(".method-row").nth(1).locator("p")).toHaveText(
    "Uma formação inicial de aproximadamente seis meses, com liberdade para continuar se aprofundando após este período",
  );
  await expect(page.locator("main")).toContainText("purê de batatas");
  await expect(page.locator("main")).toContainText("Paz Church Fortaleza");
  await expect(page.locator("main")).not.toContainText(
    /produtor musical|Estudo de design|protótipo|MVP|sem necessidade de exibir/i,
  );
  await expect(page.locator("iframe,video")).toHaveCount(0);
  for (const link of await page.locator('a[target="_blank"]').all())
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

test("teclado, foco visível e movimento reduzido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.keyboard.press("Tab");
  const focused = page.locator(":focus");
  await expect(focused).toHaveAttribute("href", "#inicio");
  expect(
    await focused.evaluate((node) => getComputedStyle(node).outlineStyle),
  ).toBe("solid");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect(
    await page
      .locator(".live-item img")
      .first()
      .evaluate((node) => getComputedStyle(node).transitionDuration),
  ).toBe("0s");
});

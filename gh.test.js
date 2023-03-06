let page;

beforeEach(async () => {
   page = await browser.newPage();
   await page.goto('https://github.com/enterprise');
});

afterEach(() => {
   page.close();
});

describe('GitHub.Team. Github page tests', () => {
   beforeEach(async () => {
      await page.goto('https://github.com/team');
   });

   test("GitHub.Team. The h1 header content'", async () => {
      const firstLink = await page.$('header div div a');
      await firstLink.click();
      await page.waitForSelector('h1');
      timeout: 30000;
      const title2 = await page.title();
      expect(title2).toEqual(
         'GitHub for teams · Build like the best teams on the planet · GitHub'
      );
   });

   test('GitHub.Team. The first link attribute', async () => {
      timeout: 10000;
      const actual = await page.$eval('a', link => link.getAttribute('href'));
      expect(actual).toEqual('#start-of-content');
   });

   test('The page contains Sign in button', async () => {
      const btnSelector = '.btn-large-mktg.btn-mktg';
      await page.waitForSelector(btnSelector, {
         visible: true
      });
      timeout: 10000;
      const actual = await page.$eval(btnSelector, link => link.textContent);
      expect(actual).toMatch('Get started with Team');
   });
});

test("GitHub. Enterprise. The h1 header content'", async () => {
   const firstLink = await page.$('header div div a');
   await firstLink.click();
   await page.waitForSelector('h1');
   timeout: 30000;
   const title2 = await page.title();
   expect(title2).toEqual('Enterprise · A smarter way to work together · GitHub');
});

test('GitHub. Enterprise. The first link attribute', async () => {
   timeout: 10000;
   const actual = await page.$eval('a', link => link.getAttribute('href'));
   expect(actual).toEqual('#start-of-content');
});

test('GitHub. Enterprise. The page contains Sign in button', async () => {
   const btnSelector =
      'body > div.logged-out.env-production.page-responsive.header-black.overflow-x-hidden > div.application-main > main > div.enterprise-hero.overflow-hidden > div > div.d-flex.flex-items-center.flex-justify-center.flex-md-justify-between.flex-wrap.gutter-spacious.position-relative > div.col-9-max.position-relative.z-2.ml-lg-4.ml-xl-0 > a.btn-mktg.mr-2.mt-2';
   await page.waitForSelector(btnSelector, {
      visible: true
   });
   timeout: 10000;
   const actual = await page.$eval(btnSelector, link => link.textContent);
   expect(actual).toMatch('Start a free trial');
});

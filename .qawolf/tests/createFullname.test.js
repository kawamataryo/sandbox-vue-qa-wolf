const { launch } = require("qawolf");
const selectors = require("../selectors/createFullname");

describe('createFullname', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://localhost:8084/" });
  });

  afterAll(() => browser.close());

  it('can create full name', async () => {
    await browser.type(selectors[1], "aaaa");
    await browser.type(selectors[3], "bbbb");

    const hasMessage = await browser.hasText("aaaa bbbb");
    expect(hasMessage).toEqual(true);
  });
});

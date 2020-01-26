const { launch } = require("qawolf");
const selectors = require("../selectors/showFullname");

describe('showFullname', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: process.env.QAW_URL || "http://localhost:8084/" });
  });

  afterAll(() => browser.close());

  it('Show fullname', async () => {
    await browser.type({ css: "[data-test='firstname-input']" }, "aaaa");
    await browser.type({ css: "[data-test='lastname-input']" }, "bbbb");

    const fullnameElement = await browser.find({css: "[data-test='fullname-field']"});
    const fullnameText = await fullnameElement.evaluate( n => n.innerText);

    expect(fullnameText).toBe("aaaa bbbb");
  });
});

const { launch } = require("qawolf");
const selectors = require("../selectors/addMessage");

describe('showMessage', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://localhost:8084/" });
  });

  afterAll(() => browser.close());

  it('Move about page and add message', async () => {
    // Move about page
    await browser.click({ css: "[data-test='about-page-link']" });

    // Insert form and click add message button
    await browser.type({ css: "[data-test='message-input']" }, "aaaa");
    await browser.click({ css: "[data-test='message-add-button']" });
    await browser.type({ css: "[data-test='message-input']" }, "bbbb");
    await browser.click({ css: "[data-test='message-add-button']" });
    await browser.type({ css: "[data-test='message-input']" }, "cccc");
    await browser.click({ css: "[data-test='message-add-button']" });

    const messageCard1 = await browser.find({css: "[data-test='message-card-1']"});
    const messageCard2 = await browser.find({css: "[data-test='message-card-2']"});
    const messageCard3 = await browser.find({css: "[data-test='message-card-3']"});

    const messageCard1Text = await messageCard1.evaluate( n => n.innerText);
    const messageCard2Text = await messageCard2.evaluate( n => n.innerText);
    const messageCard3Text = await messageCard3.evaluate( n => n.innerText);

    expect(messageCard1Text).toBe("aaaa");
    expect(messageCard2Text).toBe("bbbb");
    expect(messageCard3Text).toBe("cccc");
  });
});

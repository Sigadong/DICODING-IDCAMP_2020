const assert = require('assert');

Feature('LikingMenuRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Uhh! Favorite menu is not available. Please clik here..', '.text-heads');
});

Scenario('liking one menu restaurant', async ({ I }) => {
  I.see('Uhh! Favorite menu is not available. Please clik here..', '.text-heads');
  I.amOnPage('/');
  I.seeElement('.menu-title a');

  const firstMenu = locate('.menu-title a').first();
  const firstMenuTitle = await I.grabTextFrom(firstMenu);
  I.click(firstMenu);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.cards');

  const likedMenuTitle = await I.grabTextFrom('.menu-title');
  assert.strictEqual(firstMenuTitle, likedMenuTitle);
});

Scenario('searching menu restaurant', async ({ I }) => {
  I.see('Uhh! Favorite menu is not available. Please clik here..', '.text-heads');
  I.amOnPage('/');
  I.seeElement('.menu-title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.menu-title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.menu-title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingMenus = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedMenus = await I.grabNumberOfVisibleElements('.cards');
  assert.strictEqual(matchingMenus.length, visibleLikedMenus);

  matchingMenus.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.menu-title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});

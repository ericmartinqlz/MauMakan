/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty liked restaurant', ({ I }) => {
  I.see('Tidak ada Restaurant ditemukan!', '.no-data');
});

Scenario('like one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant ditemukan!', '.no-data');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(locate(firstRestaurant));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('restaurant-item h3');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant ditemukan!', '.no-data');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('restaurant-item a');
  I.click('restaurant-item a');

  const unlikedRestaurantName = await I.grabTextFrom('restaurant-detail h2');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restaurant ditemukan!', '.no-data');

  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);
});

Scenario('send review', async ({ I }) => {
  const nameField = 'E2E';
  const textField = 'E2E Testing Review';

  I.amOnPage('/');

  I.seeElement('restaurant-item a');
  I.click(locate('restaurant-item a').first());

  I.seeElement('#reviewForm');
  I.fillField('input', nameField);
  I.fillField('textarea', textField);
  I.click('#form-submit');

  I.see('Review berhasil dikirim!', '#formMessage');

  I.seeElement('review-item');
  I.see(nameField, locate('review-item h4').last());
  I.see(textField, locate('review-item blockquote').last());
});

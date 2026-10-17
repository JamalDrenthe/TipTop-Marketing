import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PACKAGES,
  getPackageById,
  filterPortfolioItems,
  PORTFOLIO_ITEMS,
  validateContactForm,
  recommendPackage
} from './pricing.ts';

test('exact package specifications match requirements', () => {
  const platinum = getPackageById('PLATINUM');
  assert.ok(platinum);
  assert.equal(platinum.priceDisplay, '€1.750 p/m');
  assert.equal(platinum.videosPerMonth, "8 tot 12 video's per maand");
  assert.equal(platinum.highVolumeProduction, true);
  assert.equal(platinum.fullSocialManagement, true);
  assert.equal(platinum.campaignsSpecialShoots, true);
  assert.equal(platinum.contactManagement, false);
  assert.equal(platinum.websiteIncluded, false);

  const premium = getPackageById('PREMIUM');
  assert.ok(premium);
  assert.equal(premium.priceDisplay, '€2.450 tot €3.000 p/m');
  assert.equal(premium.badge, 'Meest gekozen');
  assert.equal(premium.isFeatured, true);
  assert.equal(premium.videosPerMonth, "12 tot 16 video's per maand");
  assert.equal(premium.photosPerMonth, "9 foto's");
  assert.equal(premium.contactManagement, true);
  assert.equal(premium.websiteIncluded, true);
  assert.equal(premium.webshopIncluded, false);

  const goat = getPackageById('GOAT');
  assert.ok(goat);
  assert.equal(goat.priceDisplay, '€3.250 tot €3.500 p/m');
  assert.equal(goat.badge, 'Top tier');
  assert.equal(goat.videosPerMonth, "16 tot 20 video's per maand");
  assert.equal(goat.photosPerMonth, "18 foto's");
  assert.equal(goat.websiteIncluded, true);
  assert.equal(goat.webshopIncluded, true);
});

test('portfolio filtering returns correct counts', () => {
  const allItems = filterPortfolioItems(PORTFOLIO_ITEMS, 'all');
  assert.equal(allItems.length, 6);

  const videoItems = filterPortfolioItems(PORTFOLIO_ITEMS, 'video');
  assert.ok(videoItems.length >= 2);
  assert.ok(videoItems.every(i => i.category === 'video'));

  const webItems = filterPortfolioItems(PORTFOLIO_ITEMS, 'web');
  assert.ok(webItems.length >= 2);
  assert.ok(webItems.every(i => i.category === 'web'));
});

test('contact form validation flags invalid fields and accepts valid input', () => {
  const invalid = validateContactForm({
    name: '',
    company: '',
    email: 'bad-email',
    phone: '123',
    packageSelected: 'PREMIUM',
    message: ''
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.company);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  const valid = validateContactForm({
    name: 'Sander de Vries',
    company: 'Apex Media B.V.',
    email: 'sander@apexmedia.nl',
    phone: '+31612345678',
    packageSelected: 'PREMIUM (€2.450 tot €3.000 p/m)',
    message: 'We willen doorgroeien naar 16 videos per maand.'
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('package recommendation returns expected tier according to goals', () => {
  assert.equal(
    recommendPackage({ needsWebshop: true, needsWebsite: true, highVolumeGoal: 'maximum' }),
    'GOAT'
  );
  assert.equal(
    recommendPackage({ needsWebshop: false, needsWebsite: true, highVolumeGoal: 'high' }),
    'PREMIUM'
  );
  assert.equal(
    recommendPackage({ needsWebshop: false, needsWebsite: false, highVolumeGoal: 'standard' }),
    'PLATINUM'
  );
});

/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
const assetsToCache = [
  ...assets,
  './',
  'https://fonts.googleapis.com/css2?family=KoHo:wght@300;400;600;700&display=swap',
  'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell(assetsToCache));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

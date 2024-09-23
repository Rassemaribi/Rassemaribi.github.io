'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ca558f93d1e6d5bc1ffd27e71d43f2f",
"assets/AssetManifest.bin.json": "5323547014cb4c8d44a725b83e07ed86",
"assets/AssetManifest.json": "d0505d3805989e974d15bde07e2ef4cd",
"assets/assets/cv_racem_20244.pdf": "bf7cad0dabbd5d5d6369cc0431d06eef",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "36af1bb14228f46f4d1f968f38f1ccf0",
"assets/images/android.png": "6887b446897af63c7e4620c124bc9478",
"assets/images/angular.png": "40a9d3b718af9247049ee9a1849bd457",
"assets/images/arabic_flag.png": "ba9f348d187e75d43f08b9ce17ce8eb3",
"assets/images/ard.png": "4c4cace83f5c52ba43f58b8094ffb619",
"assets/images/atestations1.png": "bbf9d0e533747d41d490e78eaf9ad1ce",
"assets/images/attestation2.png": "ce0ea01d758ab44e94187ab0688b0445",
"assets/images/attestationEDS3.jpg": "bd1799a9323c3c944e8d57f60e8e46aa",
"assets/images/bac.png": "c2036e6562323724a6312bac80010153",
"assets/images/carte.png": "791b471a8658bd8f0482b6ed79fbb590",
"assets/images/ccna.png": "53e87218736f389b77a72ccdef384d22",
"assets/images/cv_racem_20244.png": "01234809721b29dc829d01dd925e7566",
"assets/images/date.png": "76939a6767c7bdae919a9815a33b2b43",
"assets/images/deep.png": "e7a6e4bd631e1b7a3f676b5be52c7ef9",
"assets/images/dip.png": "6fb296131d050a8cb154e1529a4743c2",
"assets/images/docker.png": "28aa5e7bd62682a2c5a2d132aa66925c",
"assets/images/eds.png": "cfe3f0ee07219f9cb858d22eb5eb0d7e",
"assets/images/english_flag.png": "8348ef04106f50404e4328a6c84372c9",
"assets/images/fod.jpeg": "b7b6194fcad95392632f1f933658eada",
"assets/images/french_flag.png": "be3d4ed62697d8244d720353f9410306",
"assets/images/git.png": "add631b638f2680caf976d349e2db7e0",
"assets/images/licence.png": "131cd43aad73a8d2427848c5dac6e6d3",
"assets/images/lindin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/images/login.jpg": "6bf89e496bf98b4aaeee56179b2779d1",
"assets/images/logocv.png": "116cbc6320033d828a4b8354f430a40a",
"assets/images/logofod.png": "82c971c20b8e6ccc5179ba95d5e92ede",
"assets/images/machinelerning.png": "a5f611cf2c5f5cba0c8357febbedda35",
"assets/images/mapreduce.png": "fff32ba16e41478ba73e6196544dc119",
"assets/images/moi.jpg": "ef2b62e3318e49530990ce0b1662fb82",
"assets/images/nego.png": "cbc62331dc91922494ccd232b74045a3",
"assets/images/pfe.jpg": "2313caaa08eb8565c75bbf9da2237453",
"assets/images/position.png": "f1f393997134c6f9592eba781d62d502",
"assets/images/python.png": "54e813c8852fee51993e9b70621c52ab",
"assets/images/register.png": "db81f95804ce195c1c16552a58ff3fd8",
"assets/images/scrum.png": "b9598f85ebd08d86e6b5d197af65602f",
"assets/images/smartwaysinnovation.png": "b38b2afb8c70149f11a463f4f7a19742",
"assets/images/socite.png": "05f4b3c33fcc0a8b904b5d9ff37943fb",
"assets/NOTICES": "fa2e6354b2549a22fb74c283611e6c47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eafdfd1fe143602951db6ff91b4e5b4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd11a59fbe964b3605c1a450ec1d9d49",
"/": "fd11a59fbe964b3605c1a450ec1d9d49",
"main.dart.js": "63189dd1a7387ede08039bcf679859ef",
"manifest.json": "d6d65ba81921e725bc2f6ed165b798f7",
"version.json": "207b32c6436a0c17758a036d5242be0e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

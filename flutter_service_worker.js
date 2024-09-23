'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2e5d33ade5205df87b782fe928e0109",
".git/config": "2a537b50371ddf643f6505e9841c6ff2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb2fb95acaf4e4450c3a51cb75e8c677",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86992732f35475c5c4fbb8f992890ece",
".git/logs/refs/heads/main": "b512e8efa8d97fe80c952048b3d17777",
".git/logs/refs/remotes/origin/main": "bd728284892a04c058cb53ef88d01618",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/c2f20aa50d1c90a2d23600ddcbe038d38f47b8": "7f9526423a4373450b304350c9163159",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/17/801c07aee6f865439e00cfba28c4a602904fc0": "4c9b6bb3ce3e2f945e73967a82cff0d0",
".git/objects/17/8b32a9a3627b88ba6f2430329b96717e4981cc": "6dc62e00a85ab2aad1fda4626df03b8d",
".git/objects/18/5f623fd7be0c25da79ce747723c7fffeef7f4a": "3e238eca5a99eeb932fa79607cf47aa7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/a031c934c135de96e4dbca2f941f93973d9c73": "7094c7b8d0f0f1bb2a4bf0005355a116",
".git/objects/2f/0d8a80ade7678fe1ca1f70357b5e27c9cf2d08": "530f5fc98fae08916458386d8b81e8d4",
".git/objects/35/ec8f10d31cb7bbfb026564756d2fb31c749cf1": "712f40f2f467d8888d04c980464fb89c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/dfe90e861e7b0b964312cfcc928399d002270c": "2e7d1e0f6d874b1b7e39b5469ebc7f5b",
".git/objects/3e/ea7ba4a5f089d60852c1b44909476a55a9aeaf": "5f7446aa12241e60f959170ba4f5ab6d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/39a72e51ea606bbd711665c85eca644e6af5a4": "0acad982abf19521fd6a9222d4098bd7",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/d77f0d6d15901d1a33de6066a4fcbb3b9b6d4e": "c66af66db159b458b62e8a51342c847c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/7ea11599a7182fa504b522affa1be4fa615c8a": "8b2917862dd12ec17e7cdef534dbcb80",
".git/objects/51/7bd26a04acbff1951d77a238fafcecf7287739": "896aa0482084cceb7f16d959cf43bd6b",
".git/objects/53/01ccdd12a870cad3d1537ca2682990fec966e4": "040b352395517a5f3eca09aa061587ab",
".git/objects/54/9c83d780d65a862b67b45ae00281b1934b2c05": "d41a1fc0b03931f4f9d70d4c95485380",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/5c2c2817a8e521cb24c0f378704d9f82da5eea": "26c515c8f4cf8978072c5f26a32d1ed0",
".git/objects/5d/fc0f61c65a1677c17963c40b5752545fca984e": "9f1aa488c52aa200f2c2e4319c12122d",
".git/objects/5f/c98187836e218dc8cda56fc53673fa1ed1ee7e": "24b968bb5f5fe1eec5d9a2eea33d1f90",
".git/objects/63/e920ea4dc986646869f0926ab41aa0f1736ef3": "ec51a433b44eee985276722c3dda8a68",
".git/objects/64/0843455434ce59e695084666e9f62ece0564a6": "b95596a13f65b89dd40478087d08e131",
".git/objects/66/7c49266f98cb235a45d853bbf4301cf6d2e6e9": "396573468b83b4aeadd32cd4c16b5087",
".git/objects/6d/ad875b2da0c1f0baa59bde6bab236edc8596f7": "d1de77e65f1731c468cb3607d56c2a03",
".git/objects/7b/d064cdcd7982b8e43acfb7f0b84075d24c74d7": "79d55c1c49e5aae0d6c0379aa210cf61",
".git/objects/7d/9830ddad417b03641cdaea5ddf3ecc6e44be27": "1c1c65c5947f61669f713afa2ddb3cd8",
".git/objects/7d/ebc8f34d5a55b522d28de05ce1698e53d1497a": "aa22a0a8df1468663af1fa3d74d9633e",
".git/objects/80/89b8aaee06e69cc2607d4129d3e8fc5c0ca272": "56efaed09bf2655392399c15fb8797a6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/7b25994eb92a980ba544664daeef79b0ef3316": "47d6a5fc5610bceb7501b84157667ba3",
".git/objects/88/2dd8637da594323ca86473d048ae7aa8cc4aa8": "147afd76726f1226004c069b1cc929ff",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a76f8099d1ece1e0de7bb689ad1620193b1c11": "cc62c59f02d3123022dc480932c26dfa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3781cda483e785c40b9873bb0c4ce8fecd0a1b": "bc1b3febcccae417dba5517579c13653",
".git/objects/8e/e32b1f583ed560de2bfd3a6ee700fc430fc124": "97b1880f8f87f0cff99d2d8d41e8ecc5",
".git/objects/92/590ffe32e12d9467a14c47ae4ee3e965546b58": "3114bd19db643268a87d2e7a8ee8734c",
".git/objects/94/0349cf57d7c1c05c978ca0551875b7f30862a1": "d802dc6f818fe403ac0f8c6fe440d1d2",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9e/44383b5ee88ee6cbf25cd9b183687c859d5d00": "6985a231c409aa4b17aa01f4f6cf77d9",
".git/objects/a5/a34ce3d95cad12df88514020244df600e11327": "1e8b8e3155772a97868f7eef9eee24ed",
".git/objects/a6/c9bd7afdb465b557b2d3eab7672a18710cbe04": "522b4c9b035c2d5ff8bc9025c93fcdc3",
".git/objects/ac/2ce72b05f228b2094643443c42d71e16619ebd": "e91e5bfb84c261ead8c3f78bf6edafc4",
".git/objects/b0/a6f10c8bfd15e84d41d63a97640d00bd7ad718": "d18a44bbbbeba97b7ab78f14ae681fee",
".git/objects/b6/d1ce943e6cc0b60414a5823c498232888e8d17": "5cc176a58ced9f679d7943b624ea1cf2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c00e2fe2fee1b204bb70ec22f76e75dc3aa438": "b461f5862cd0dac251ec581e31c53174",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/e1880d4661115f74d07f7dbe46756a6391a8f6": "075d2b5433721bfb6e70d606f8aba800",
".git/objects/bf/cc2889a28f6f8ca11234e6415b76d141ce4596": "b53ee104bbbc8cef033e9e0e27ab1617",
".git/objects/c3/318474410ea45fe085efbff70c36bc4b262aa0": "6b776795b53db51b2271a6bf047738ad",
".git/objects/c5/9e2e7e3734d544a7f269cfaaa7d0057a8c699b": "9d7fccebb85ed50c134a575aebd97c8f",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/cfa4c7b840d20a4f8400fb487050f122bc3d19": "2e3565f492efe9f149c752bd75d8c65c",
".git/objects/c9/bc3dded260b4ac442a9fd98bd66c3bd4c3a022": "fd5a52f1f614ac75ca9cb66e69497efc",
".git/objects/c9/d984571f202cc7009e18a49b124564210f2cf2": "4276515318daeec96167d156f1b38714",
".git/objects/cc/0554e0f71e4a57b1698f2f2671c3df7fab2139": "7d25ae7b2bb27412fb48532c5dc0bbde",
".git/objects/d3/4bf015fd22a4ffce645061d2cbf9b392bc5e4f": "69b30fe00e02e8f5ff056ae86e5141aa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2137b49bc10c54499bb2d8429a2f45a718fbb3": "1ad382b9be43e7a9ff805b5a3741a0e9",
".git/objects/de/3a13c28d1e203d599e4802f89f336aecd7709a": "18044d1f32e32ddae4d942224c7d2aae",
".git/objects/de/43dfc9708b0e4a49f57cda5cd7a180752f2a76": "eb6db1e3f9e1f6873312b34b9b71f254",
".git/objects/de/57d6d0eefcc93f6a08797b12bf965ed66efbe7": "06b14a043f0ef27e1cb4ee5562a4df78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/f24d6ac0e0650f5052cbae452de7c24a619e6e": "c2ea970b816236986a5aba71583b7fbb",
".git/objects/f2/f179df8c7a9e2015f2a9bd0a353e07854c4f11": "14f20ce8aebcf9965eaf5a80dde99e53",
".git/objects/f7/dd586bead2d3d1d30bd25bddcf281d3bf51159": "c4bd9b2045fec544d0c0f17ee77f4902",
".git/objects/fc/0de1f6881071ff3b0d7ae75099b45e5f3c19fc": "30139aa60f4815ab01c118db94aa990e",
".git/objects/fd/c83cefa50f0292643580bb4dd772b83ddb9937": "2bd8f07e28f5a57958bb99956d48bf52",
".git/refs/heads/main": "4d64ecb51b3938dc8f4c96435245f0f6",
".git/refs/remotes/origin/main": "4d64ecb51b3938dc8f4c96435245f0f6",
"assets/AssetManifest.bin": "4ca558f93d1e6d5bc1ffd27e71d43f2f",
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
"index.html": "786514c7ce4258ebe49527134a4bf9a6",
"/": "786514c7ce4258ebe49527134a4bf9a6",
"main.dart.js": "c92467f55b710f194c4c5897ffd951ff",
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

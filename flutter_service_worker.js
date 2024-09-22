'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f26d12608ee56e0876f42298319ba9c1",
"version.json": "50afcc7c93e8f6ec31a9356cd28204b8",
"index.html": "dfec59a8873f7971415b7038e31d96e3",
"/": "dfec59a8873f7971415b7038e31d96e3",
"main.dart.js": "9ec299f90e3fec4a8f9ed5abc590ddcc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83ee55674397ecc11877c442ae0da704",
".git/ORIG_HEAD": "ed19fa87389675c47cbf50ac0eced2ad",
".git/config": "0012f4138e5df157ad4ce9ddfa4cdad0",
".git/objects/59/971f16fc51dcc068eb687101ea3eca5ee32ee4": "f438d6a75b24ea7f5403f02eed26d6d6",
".git/objects/0c/63e486a8c453bedd2dc2a210a945bab6ddd5f6": "4128cb4654cdb0d5a23cfdfebaf29893",
".git/objects/50/e8a9483de6710c9738265c56096eec282bd3d8": "fcffc678df87916d9882a3bab9514ba0",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/cd496b81d7a34296289eaf3dc4256475796806": "09a37bb90872e4894caff7f79d5a64a9",
".git/objects/03/6f8202dccc47cbb623e412c2f489a4b6b6a3e6": "2f06864b810998b45f3df495045715ca",
".git/objects/6a/8fc64487d93b3031b393c1c35db9171752fc47": "fefb89909e73428ad1ecc8c1fcf909b3",
".git/objects/32/a54b1d2f5d04977e21b344588f47369b5ecad7": "bbe98911a89a1a6e71a9de06a3866d27",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/3c/423dc19d0a0392a4c3e02dd1216572d94efeda": "ba78d1bfb0d0b7c4852161af9fb57631",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/2a5f3788b453f9313430e5486726e4bcba81f6": "8aeb4bbf7b0d1d303483e402d18b15f3",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5f/95c156d1c725847a014bd6de5f7b3d1a59b9b4": "8aa3ccefdf2e2a1e39e6df3da74348a3",
".git/objects/9c/1d945f568e4adb1e425ef5688ffac96b7aedbe": "7aa3d4f9cb85827e344120b9d1a9b52c",
".git/objects/9c/347bc46920f8764b6c4db9ecdf1d1fe5b391be": "12b9bad11883dedc0726c6919c7a3ed8",
".git/objects/a3/9f8718648e7eda6b5e5b71a4cfe5a2073e4061": "442ea4c2a6dc0655ff7c2636cf03a13d",
".git/objects/b5/a273cd5dd6266d338b1598084d965a334bd459": "0eb647eb4014a9410dd1c2b564af4b05",
".git/objects/b2/285ff209720f8825788a4095970f538eb8ba2e": "ece8b60f209838bf3f8a7f9727c3c902",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/d3588aaf927f72e3a3d281fc2381e0947690c7": "e5af6fdf59c27ce5c0e31d9a50d2aab4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9a7ba5df0125f288f482b0104089bb6abe92c7": "d5c23d8aa1d8998fe75f3947f9bce74e",
".git/objects/e2/0fd26f9101f0521b4215456822b33d74919abd": "0e5f76ea739da97ad165e291031f9933",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/01e844660e16bf233b7da49574e99ad95e0bb7": "4eaadf80a7154f00aae6f75e6c602605",
".git/objects/c0/fa8d0fb6b721484a6c98b2b7be60f3ed571e39": "b4c8a067f13d225444f22b6dd9424f4d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/cb250551a5e13d0461af58300865580efa817b": "9245901bd3d8d7013d3a7ad8ac766b64",
".git/objects/e3/ed6e2ebba6723b0fca8671ec25ddfedaf7f63e": "54e0dc050dacb7ada2f4dcff46a0920b",
".git/objects/ca/06468e2e0c2e1a6d672930b98afe031dfd610d": "c70d759e654c332546a2b3d883f4632c",
".git/objects/e4/15ff447b41e78ce68b8783ff792603813f5d23": "64b7ce290e6d6e1073f130cb157c2ea9",
".git/objects/fb/a82c4a84d503cebd1794c44df8ff93a1317bdd": "ebb88dafcf85004d0afff5fa81c58621",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/16/5286f9f5d2a79050474a17fae6fbc877d6b8dd": "cb14bddd5059a0a985122e2992e91aa3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/7e1f13992e2f22bcf5a06eff288c7f1931b59a": "fd4bf1429a6d4f72d5af67e94a5ff644",
".git/objects/28/366ffab5cefa791dbc04e694ca36e475955b51": "2a229f7c239e6eb1fa9d1eb366ef36b7",
".git/objects/8a/e15bc2fc8bddeed4112d9a6f8ac11cfd7b194b": "19d05af72a5dca9a0af1b77591362200",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/01986fe8d3fa13156dfb61f381dbd0394a8c3e": "445252cd8a2fe9900392ecc2c9090918",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/36/90186ddfd745e3db78832b1a8065c760efd126": "11346810a72e27b1fd837cc405dadc48",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/b53247fc6b302deae705f740129797761bc6f4": "c3b30c106eac87b2cee0e30f38b1645c",
".git/objects/06/ad9542b59187ca0974ffbe310671266d202406": "2d3a6fa61d7cf01e14629f150c0d68f7",
".git/objects/99/6be17b3caa8227772078eca9db8a471ecc3139": "30d0fc4d32d79ffbcd24847da33d7caa",
".git/objects/55/2472c615c58a9e073dbce82942ac1dd366b854": "994e3cbfd4666e1336d9cb74e08f9ac9",
".git/objects/97/96dd15bff48ce27d1e56e0b1bd32d4cb0c44e2": "13a76f5de9e349c524aba352611375a6",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/13a80b1baf749a9442d2c419e49cf1945c3a97": "8097dcef0c67ca126336febb5bb10b65",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/c18e96b62ca71225bc76b35dd13a1cd36f8f64": "4341b011e479e03c6121921c1ed94c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/864d71e20bb145e6346f460b51f7628812758b": "fbf2aabe46a5bc9f159273a37d5e36f7",
".git/objects/f0/7b948a7e55302eca3906c20503e6e5b5c01efd": "8ddaf2a9a31356629a4332aad0974a32",
".git/objects/c5/065b916f91bc5283e26485b09131e3e7ed2bb3": "53fbe5f732cc7854187a730ee846f66f",
".git/objects/cb/7080fe7dd328cdde51fc01b26d175dadc5f1e7": "1bfae784398aa86eecae77bd4199413a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1ee1357630eccf4d100b63ebdac399cd371d62": "d475d435961027cda06f08e46c0bf7af",
".git/objects/2c/cb2e86796859edd205340ce9db7857760a3095": "e25b04dd36f115f724b957569e4f316a",
".git/objects/83/4979b49f0fe67ef91f5b25c68a24907202c745": "be6a58d76bbbdd06aa66bb32da80e6aa",
".git/objects/48/a6e2193c8b2c0339a86d1cd3e674b7cb0fd3fc": "caffb9252020c55efc43a8d3254fc14c",
".git/objects/70/2ca39e64ac573145f88c7ca6b0217a3d9b0cd9": "f53bc299dd104e836b8ff9205e2ca5e1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/12/6b984dd64125d3cff1957f4847fff19b7cb209": "b7d21825729325439e47484485bab123",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/95b854413dbff06bbe0ef0f8d8ef7da7f31fe8": "a53e6d68a74ba5f820e6a3e154ca0483",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/10f6c6693ae28b8aa0d504aee657d4729a3598": "e4fdd19bf2de323b90a83a2682ce4eda",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/9137b7326f123bb8ec4e49bcbbec97886298d1": "d8bc1ff007bf97cc8acebca063969dd6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d257d0a7f28653c1b9ab7f231f2531dd",
".git/logs/refs/heads/main": "d257d0a7f28653c1b9ab7f231f2531dd",
".git/logs/refs/remotes/origin/main": "34f4c7cd0cbdc84848f412dad7dd0f94",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0de5563c3afd4be74ff8d9d7583e55a0",
".git/refs/remotes/origin/main": "0de5563c3afd4be74ff8d9d7583e55a0",
".git/index": "b1e8e2b5e51afcdcb14a50dccd696427",
".git/COMMIT_EDITMSG": "73ae08505390df520214a5bdddc35da9",
".git/FETCH_HEAD": "9d24f7a95618d6ffca48af619cebd151",
"assets/AssetManifest.json": "0dcea527636a0764f8f4ddadb3523f50",
"assets/NOTICES": "ffd67bb68cdc0e28d488e66d91047a13",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "98d1948266a06b1617370478cf5432ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "974b9aac46b976fb42292d64dece702e",
"assets/fonts/MaterialIcons-Regular.otf": "6a0445203e0fd5c32c90e1175987f8c2",
"assets/assets/images/kausaricon.png": "350987fe9cb8d949008fbcc291f27a1e",
"assets/assets/images/image2.png": "a6f9679f989b38032a9e44b348778cfa",
"assets/assets/images/image.png": "18ae39756fb17edd82908fc919d6d99e",
"assets/assets/images/image3.png": "4c33a5653c40ee2ca887c9e2e5ac1c66",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

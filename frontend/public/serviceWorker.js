const staticDevSM500 = "dev-sm500-site-v1d";
const assets = [
    "/",
    "index.html",
    "../src/App.js",
    "./src/css/Inicio.css",
    "./src/css/NavBar.css",
    "./src/media/icon.png",
    "./src/media/m500.svg",
    "./src/media/user.png",

];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevSM500).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWaith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});

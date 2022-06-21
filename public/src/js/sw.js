self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing the service worker ...' , event);
 });
 
 self.addEventListener('activate', function(event){
     console.log('[Service Worker] Activating the service worker...', event);
     return self.clientInformation.claim();         //this line ensures that service worker works correctly, though it will also work with this line, but to be on safer side add this line. 
 });
 
 self.addEventListener('fetch', function(event){
     console.log('[Service Worker] Fetching something something...', event);
     event.respondWith(fetch(event.request));
 });
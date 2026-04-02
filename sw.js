// sw.js
self.addEventListener('push', function(event) {
    const options = {
        body: 'MISSION COMPLETE',
        icon: 'icon.png', // もしアイコンがあれば
        badge: 'icon.png'
    };
    event.waitUntil(
        self.registration.showNotification('Grand Mission Timer', options)
    );
});

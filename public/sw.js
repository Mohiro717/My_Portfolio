const CACHE_NAME = 'mohiro-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/home.jpg',
  '/images/favicon.jpg',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Yomogi&display=swap',
  'https://fonts.gstatic.com/s/yomogi/v3/VuJxdNvD15HhpJJBeKbXOIFneRo.woff2'
];

// Install event - キャッシュにリソースを保存
self.addEventListener('install', event => {
  console.log('Service Worker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - 古いキャッシュを削除
self.addEventListener('activate', event => {
  console.log('Service Worker: Activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - ネットワーク要求の処理
self.addEventListener('fetch', event => {
  // Hash routingの場合、リクエストURLを正規化
  const url = new URL(event.request.url);
  
  // 外部リソースの場合はキャッシュファーストで処理
  if (url.origin !== location.origin) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
    return;
  }

  // SPAの場合、HTML要求はすべてindex.htmlにリダイレクト
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      caches.match('/index.html').then(response => {
        return response || fetch('/index.html');
      })
    );
    return;
  }

  // その他のリソース - キャッシュファースト戦略
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(response => {
        // 有効な応答の場合のみキャッシュ
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // 応答をクローンしてキャッシュに保存
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Background sync for offline actions (future feature)
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Future: Handle offline actions
      console.log('Handling background sync')
    );
  }
});

// Push notifications (future feature)
self.addEventListener('push', event => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Mohiro Portfolioからの通知',
    icon: '/images/favicon.jpg',
    badge: '/images/favicon.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '詳細を見る',
        icon: '/images/favicon.jpg'
      },
      {
        action: 'close',
        title: '閉じる'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Mohiro Portfolio', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification click');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
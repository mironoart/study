self.addEventListener('install', evt => {
   console.log('service worker has been installed')
})

self.addEventListener('activate', evt => {
   console.log('service woker has been activated')
})

//fetch events
self.addEventListener('fetch', evt => {
   console.log('fetch event', evt)
})

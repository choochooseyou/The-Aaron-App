const CACHE_NAME = "aaron-app-v1";
self.addEventListener("install", (event) => {  self.skipWaiting();});
self.addEventListener("activate", (event) => {  event.waitUntil(self.clients.claim());});
self.addEventListener("push", (event) => {  let data = {};
  if (event.data) {    try {      data = event.data.json();    } catch {      data = { body: event.data.text() };    }  }
  const title = data.title || "The Aaron App ";
  const options = {    body: data.body || "Your little daily reminder is waiting.",    icon: "/The-Aaron-App/icon.svg",    badge: "/The-Aaron-App/icon.svg",    data: {      url: "/The-Aaron-App/"    }  };
  event.waitUntil(    self.registration.showNotification(title, options)  );});
self.addEventListener("notificationclick", (event) => {  event.notification.close();
  const url = new URL(    event.notification.data?.url || "/The-Aaron-App/",    self.location.origin  ).href;
  event.waitUntil(    self.clients.openWindow(url)  );});

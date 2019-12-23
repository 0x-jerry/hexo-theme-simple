async function registerSW() {
  const worker = await navigator.serviceWorker.register("/ws.js");

  // worker.onupdatefound = ev => {
  //   console.log("update found", ev);
  // };
}

if (navigator.serviceWorker) {
  registerSW();
}

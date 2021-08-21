self.onmessage = (msg) => {
  console.log('msg ', msg.data);
  self.postMessage({text: 'Hello from worker'});
}

function publishNFLLogo(event) {
    event.respondWith(
      fetch('img/NFL-logo.png')
        .then(response => response.blob())
        .then(blob => new Response(blob, { headers: { 'Content-Type': 'image/png' } }))
    );
  }
  
  function publishTodoIdWithSymbol(event) {
    const id = event.request.url.split('/').pop();
    const responseText = `ID del pendiente: ${id}!`;
  
    event.respondWith(
      new Response(responseText, { headers: { 'Content-Type': 'text/plain' } })
    );
  }
  
  self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);
  
    if (requestUrl.pathname.includes('/todos')) {
      if (requestUrl.pathname.endsWith('.png')) {
        publishNFLLogo(event);
      } else {
        publishTodoIdWithSymbol(event);
      }
    }
  });
  
  self.addEventListener('install', event => {
    console.log('Instalando SW');
  });
  
  self.addEventListener('activate', event => {
    console.log('Activado SW');
  });

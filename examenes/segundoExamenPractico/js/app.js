var url = 'https://jsonplaceholder.typicode.com/todos';

if(navigator.serviceWorker){
  navigator.serviceWorker.register('/sw.js')
}

self.addEventListener('install', event => {
console.log("Instalando SW");

const instalacion = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("instalado SW");
        self.skipWaiting();
        resolve();
    }, 100);
});

event.waitUntil(instalacion);
});


self.addEventListener('activate', event=>{
console.log("SW activado");
})

function LtpSoloId() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const elementsIds = data.map(element => element.id);
      document.getElementById('data').innerText = `${elementsIds.join(', ')}`;
    });
}

function LtpIdTitles(){
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const elementsIds = data.map(element => `${element.id}: ${element.title}`);
      document.getElementById('data').innerText = `${elementsIds.join(', ')}`;
    });
}

function LtpIdTitlesUnsolved(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const elementData = data.filter(element => !element.completed);
    const elementDataResponse = elementData.map(element => `${element.id}: ${element.title}`);
    document.getElementById('data').innerText = `${elementDataResponse.join(', ')}`;
  })
}

function LtpIdTitlesSolved(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const elementData = data.filter(element => element.completed);
    const elementDataResponse = elementData.map(element => `${element.id}: ${element.title}`);
    document.getElementById('data').innerText = `${elementDataResponse.join(', ')}`;
  })
}

function LtpIdUserid(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const elementsIdsAndUserId = data.map(element => `${element.id}: ${element.userId}`);
    document.getElementById('data').innerText = `${elementsIdsAndUserId.join(', ')}`;
  })
}

function LtpIdUseridUnsolved(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const elementData = data.filter(element => !element.completed);
    const elementDataResponse = elementData.map(element => `${element.id}: ${element.userId}`);
    document.getElementById('data').innerText = `${elementDataResponse.join(', ')}`;
  })
}

function LtpIdUseridSolved(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const elementData = data.filter(element => element.completed);
    const elementDataResponse = elementData.map(element => `${element.id}: ${element.userId}`);
    document.getElementById('data').innerText = `${elementDataResponse.join(', ')}`;
  })
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('LtpSoloId').addEventListener('click', LtpSoloId);
  document.getElementById('LtpIdTitles').addEventListener('click', LtpIdTitles);
  document.getElementById('LtpIdTitlesUnsolved').addEventListener('click', LtpIdTitlesUnsolved);
  document.getElementById('LtpIdTitlesSolved').addEventListener('click', LtpIdTitlesSolved);
  document.getElementById('LtpIdUserid').addEventListener('click', LtpIdUserid);
  document.getElementById('LtpIdUseridUnsolved').addEventListener('click', LtpIdUseridUnsolved);
  document.getElementById('LtpIdUseridSolved').addEventListener('click', LtpIdUseridSolved);
});
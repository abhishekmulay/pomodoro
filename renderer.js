// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// https://stackoverflow.com/questions/41819632/how-to-call-a-function-module-in-electron-from-my-webpage

const { ipcRenderer } = require('electron');


document.querySelector('#start-btn').addEventListener('click', function () {
  ipcRenderer.send('click');
  console.log('event sent from renderer');
})

const moment = require('moment');

const settings = require('electron-settings');

settings.set('name', {
  first: 'Cosmo',
  last: 'Kramer'
});

console.log(settings.get('name.first'));
// => "Cosmo"

console.log(settings.has('name.middle'));
// => false




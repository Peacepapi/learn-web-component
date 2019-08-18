import './loadingScreen.js';

window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const loadingScreen = document.querySelector('loading-screen');
    
    //const loadingScreen = document.createElement('loading-screen');
    body.appendChild(loadingScreen);
})
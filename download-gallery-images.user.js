
// ==UserScript==
// @name         Download Full-Size Gallery Images Button
// @namespace    https://github.com/yourusername/gallery-scripts
// @version      1.3
// @description  Adds a button to download all full-size images from the gallery
// @author       YourName
// @match        https://www.gayporntube.com/galleries/*
// @icon         https://www.gayporntube.com/favicon.ico
// @grant        none
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/yourusername/gallery-scripts/main/download-gallery-images.user.js
// @updateURL    https://raw.githubusercontent.com/yourusername/gallery-scripts/main/download-gallery-images.user.js
// ==/UserScript==

(function () {
    'use strict';

    // Confirm script is active
    console.log('Download script is running');
    alert('Download Full-Size Gallery script is active');

    // Album folder and image range
    const folderPath = '1449000/1449705';
    const startId = 193248261;
    const endId = 193248443;

    // Create download button
    const button = document.createElement('button');
    button.textContent = 'Download Full-Size Images';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

    button.addEventListener('click', () => {
        let delay = 0;
        for (let i = startId; i <= endId; i++) {
            const imageUrl = `https://media-2-albums.gayporntube.com/contents/albums/sources/${folderPath}/${i}.jpg`;
            const fileName = `${i}.jpg`;

            setTimeout(() => {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, delay);

            delay += 800;
        }
    });

    // Add button to the page
    document.body.appendChild(button);
})();

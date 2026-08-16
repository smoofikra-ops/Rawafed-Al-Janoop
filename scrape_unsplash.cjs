const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/"(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"]+)"/g)];
        const urls = [...new Set(matches.map(m => m[1]))].filter(u => !u.includes('profile-') && u.includes('?ixid=') && u.includes('w='));
        resolve(urls.slice(0, 5));
      });
    }).on('error', reject);
  });
}

searchUnsplash('warehouse').then(urls => console.log('Found:', urls));

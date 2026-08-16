const https = require('https');

function searchDDG(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' site:unsplash.com')}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        // extract images
        const matches = [...data.matchAll(/src="\/\/external-content\.duckduckgo\.com\/iu\/\?u=([^&"]+)/g)];
        const urls = matches.map(m => decodeURIComponent(m[1]));
        resolve(urls);
      });
    }).on('error', reject);
  });
}

searchDDG('warehouse').then(urls => console.log('Found:', urls.slice(0, 5)));

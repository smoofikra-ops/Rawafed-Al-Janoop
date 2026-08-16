const https = require('https');

function searchPexels(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/src="(https:\/\/images\.pexels\.com\/photos\/[0-9]+\/pexels-photo-[0-9]+\.jpeg[^"]*)"/g)];
        const urls = [...new Set(matches.map(m => m[1]))];
        resolve(urls.slice(0, 5));
      });
    }).on('error', reject);
  });
}

searchPexels('warehouse').then(urls => console.log('Found:', urls));

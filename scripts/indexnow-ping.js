#!/usr/bin/env node
// Simple IndexNow ping script
// Usage: node indexnow-ping.js <API_KEY> <url1> [url2 ...]

const https = require('https');

const key = process.argv[2];
const urls = process.argv.slice(3);

if (!key || urls.length === 0) {
  console.error('Usage: node indexnow-ping.js <API_KEY> <url1> [url2 ...]');
  process.exit(1);
}

const payload = JSON.stringify({
  host: new URL(urls[0]).host,
  key: key,
  keyLocation: `https://${new URL(urls[0]).host}/indexnow-key.txt`,
  urls: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Response:', res.statusCode, data);
  });
});

req.on('error', (e) => { console.error('Error:', e); });
req.write(payload);
req.end();

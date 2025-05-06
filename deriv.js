const WebSocket = require('ws');

// ✅ Replace this with your real Deriv App ID
const app_id = 'YOUR_APP_ID';

// ✅ WebSocket using fallback domain
const ws = new WebSocket("wss://deriv-api.binaryws.com/websockets/v3?app_id=" + app_id);

ws.on('open', () => {
  console.log('✅ Connected to Deriv API');

  // 📡 Request active symbols (market list)
  ws.send(JSON.stringify({
    active_symbols: 'brief',
    product_type: 'basic',
  }));
});

ws.on('message', (data) => {
  const response = JSON.parse(data);
  console.log('�� Response:', response);
});

ws.on('error', (err) => {
  console.error('❌ WebSocket Error:', err);
});

ws.on('close', () => {
  console.log('🔌 Connection closed');
});

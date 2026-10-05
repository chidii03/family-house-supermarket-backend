import app from './app.js';
import './db/init.js';

// Debug: Log all environment variables RENDER sees (except secrets)
console.log("Checking Environment...");
console.log("RENDER PORT PROVIDED:", process.env.PORT);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 ACTUAL Server started!`);
  console.log(`📡 Listening on Port: ${PORT}`);
  console.log(`🔗 URL: http://0.0.0.0:${PORT}`);
});
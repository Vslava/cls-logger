const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '../../.env');

if (fs.existsSync(envPath)) {
  const dotenv = require('dotenv');
  dotenv.config({ path: envPath });
}

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Salesforce Node.js Integration');
});


const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } = process.env;
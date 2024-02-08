import express from 'express';
import dotenv from 'dotenv';
import jsforce from 'jsforce';

dotenv.config();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  conn.query('SELECT Id, Name FROM Account', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  res.send('Salesforce Node.js Integration');
});


const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } = process.env;

const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL
});

conn.login(SF_USERNAME, SF_PASSWORD + SF_SECURITY_TOKEN, (err, userInfo) => {
  if (err) {
    return console.error(err);
  }
  console.log('Connected to Salesforce');
  console.log('User ID: ' + userInfo.id);
  console.log('Org ID: ' + userInfo.organizationId);
});
import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Salesforce Node.js Integration');
});
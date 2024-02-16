const express = require('express');

const app = express();

const items = [
  { id: 1, name: 'Modified now Item number 1' },
  { id: 2, name: 'Modified now Item number 2' },
  { id: 3, name: 'Modified now Item number 3' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


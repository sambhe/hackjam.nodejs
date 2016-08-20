const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send({message: 'everything is up and running'});
});

app.listen(9000, () => {
  console.log('the app is running on port 9000');
});

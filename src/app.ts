'use strict';

import * as Express from 'express';

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4001, () => {
  console.log('It working on port 4001...');
});

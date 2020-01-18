'use strict';

import * as Express from 'express';

const app = Express();

app.get('/health', (req, res): void => {
  res.send('It\'s working.');
});

app.listen(4001, () => {
  console.log('It working on port 4001...');
});

'use strict';

import * as Express from 'express';
import routes from './core/middlewares/routes';

const app = Express();

// Middlewares:
app.use(routes());

app.listen(4001, (): void => {
  console.log('It\'s working on port 4001...');
});

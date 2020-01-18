'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(4001, () => {
    console.log('It working on port 4001...');
});
//# sourceMappingURL=app.js.map
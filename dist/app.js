'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const routes_1 = require("./core/middlewares/routes");
const app = Express();
app.use(routes_1.default());
app.listen(4001, () => {
    console.log('It\'s working on port 4001...');
});
//# sourceMappingURL=app.js.map
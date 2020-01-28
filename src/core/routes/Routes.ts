'use strict';

import { Router } from "express";

abstract class Routes {
  protected router: Router;

  constructor(expressRouter: Router) {
    this.router = expressRouter;
    this.generateRoutes();
  }

  protected abstract generateRoutes(): void;
}

export default Routes;

'use strict';

import Routes from "../Routes";
import { Request, Response } from "express";

class MainRoutes extends Routes {
  protected generateRoutes(): void {
    this.router.get('/', (req: Request, res: Response): void => {
      res.send('You are using the Underground Legions API.');
    });

    this.router.get('/health', (req: Request, res: Response): void => {
      res.send('It\'s working.');
    });
  }
}

export default MainRoutes;

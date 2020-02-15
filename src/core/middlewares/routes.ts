'use strinct';

import { Router } from "express";
import MainRoutes from "../routes/main/MainRoutes";

export default (): Router => {
  const router = Router();

  new MainRoutes(router);

  return router;
};

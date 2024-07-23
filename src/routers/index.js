import { Router } from "express";
import tourRouter from './tour/index.js'; // Provide the correct path to tourController.js
const router = Router();
router.use('/v1/api', tourRouter);
export default router;
import { Router } from "express";
import tourRouter from './tour/index.js'; // Provide the correct path to tourController.js
import userRouter from './user/index.js'; // Provide the correct path to tourController.js
const router = Router();
router.use('/v1/api/tour', tourRouter);
router.use('/v1/api/user', userRouter);
export default router;
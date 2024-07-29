import { Router } from "express";
import authController from "../../controllers/auth.controller.js";
import catchAsync from "../../middlewares/catchAsync.middleware.js";

const router = Router();

// Auth Flow

router.post('/signup', catchAsync(authController.signup));
router.post('/accountActivation ', catchAsync(authController.accountActivation));
router.post('/login', catchAsync(authController.login));
router.get('/logout', catchAsync(authController.logout));
router.post('/forgotPassword', catchAsync(authController.forgotPassword));
router.patch('/resetPassword/:token', catchAsync(authController.resetPassword));
router.patch('/updateMyPassword', catchAsync(authController.updatePassword));

// User Flow

export default router;

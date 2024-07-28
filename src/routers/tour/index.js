import { Router } from "express";
import tourController from "../../controllers/tour.controller.js";
import catchAsync from "../../middlewares/catchAsync.middleware.js";
import aliasTopTours from "../../helpers/aliasTopTours.js";


const router = Router();

router
  .route('/top-5-cheap')
  .get(aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route("/")
  .get(catchAsync(tourController.getAllTours))
  .post(catchAsync(tourController.createTour));
router
  .route("/:id")
  .get(catchAsync(tourController.getTourById))
  .patch(catchAsync(tourController.updateTourById))
  .delete(catchAsync(tourController.deleteTourById));

export default router;

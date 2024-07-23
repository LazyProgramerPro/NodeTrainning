import { Router } from "express";
import tourController from "../../controllers/tour.controller.js";


const router = Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById)
  .delete(tourController.deleteTourById);

export default router;

import { SuccessResponse } from "../middlewares/responses.middeware.js";
import TourService from "../services/tour.service.js";

class TourController {
  getAllTours = async (req, res, next) => {
    new SuccessResponse({
      message: "getAllTours success!",
      metadata: await TourService.getAllTours(req.query)
    }).send(res)
  };

  createTour = async (req, res, next) => {
    new SuccessResponse({
      message: "createTour success!",
      metadata: await TourService.createTour(req.body)
    }).send(res)
  };

  getTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "getTourById success!",
      metadata: await TourService.getTourById(req.params.id)
    }).send(res)
  };

  updateTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "updateTourById success!",
      metadata: await TourService.updateTourById(req.params.id, req.body)
    }).send(res)
  };

  deleteTourById = async (req, res, next) => {
    new SuccessResponse({
      message: "deleteTourById success!",
      metadata: await TourService.deleteTourById(req.params.id)
    }).send(res)
  };
  
  getTourStats = async (req, res, next) => {
    new SuccessResponse({
      message: "getTourStats success!",
      metadata: await TourService.getTourStats()
    }).send(res)
  };

  getMonthlyPlan = async (req, res, next) => {
    new SuccessResponse({
      message: "getMonthlyPlan success!",
      metadata: await TourService.getMonthlyPlan(req.params.year)
    }).send(res)
  };
}

export default new TourController();



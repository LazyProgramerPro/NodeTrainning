import TourService from "../services/tour.service.js";

class TourController {
  getAllTours = async (req, res, next) => {
    return await TourService.getAllTours();
  };

  createTour = async (req, res, next) => {
    return await TourService.createTour(req.body);
  };

  getTourById = async (req, res, next) => {
    return await TourService.getTourById(req.params.id);
  };

  updateTourById = async (req, res, next) => {
    return await TourService.updateTourById(req.params.id, req.body);
  };
  deleteTourById = async (req, res, next) => {
    return await TourService.deleteTourById(req.params.id);
  };
}

export default new TourController();



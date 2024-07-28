import { NotFoundError } from '../middlewares/errors.middleware.js';
import tourModel from '../models/tour.model.js';
import { APIFeatures } from '../utils/apiFeatures.js';

export default class TourService {
  constructor() { }

  static async getAllTours(query) {
    const features = new APIFeatures(tourModel.find(), query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    return await features.query;
  }

  static async createTour(tour) {
    return await tourModel.create(tour);
  }

  static async getTourById(id) {
    const tour = await tourModel.findById(id);
    // Tour.findOne({ _id: req.params.id })
    if (!tour) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tour;
  }

  static async updateTourById(id, tour) {

    const tourUpdate = await tourModel.findByIdAndUpdate(id, tour, {
      new: true,
      runValidators: true
    });

    if (!tourUpdate) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tourUpdate;
  }

  static async deleteTourById(id) {
    const tour = await tourModel.findByIdAndDelete(id);
    if (!tour) {
      throw new NotFoundError('No tour found with that ID', 404);
    }
    return tour
  }

  static async getTourStats() {
    // Thống kê các tour theo độ khó
    const stats = await tourModel.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } }
      },
      {
        $group: {
          _id: { $toUpper: '$difficulty' }, // Nhóm theo giá trị của trường difficulty, chuyển thành chữ hoa
          numTours: { $sum: 1 },             // Tổng số tour trong mỗi nhóm
          numRatings: { $sum: '$ratingsQuantity' }, // Tổng số lượng đánh giá trong mỗi nhóm
          avgRating: { $avg: '$ratingsAverage' },   // Trung bình đánh giá trong mỗi nhóm
          avgPrice: { $avg: '$price' },           // Trung bình giá tour trong mỗi nhóm
          minPrice: { $min: '$price' },           // Giá thấp nhất trong mỗi nhóm
          maxPrice: { $max: '$price' }            // Giá cao nhất trong mỗi nhóm
        }
      },
      {
        $sort: { avgPrice: 1 }
      }
      // {
      //   $match: { _id: { $ne: 'EASY' } }
      // }
    ]);

    return stats
  }

  static async getMonthlyPlan(year) {
    // Thống kê các Tour theo từng tháng trong năm
    const yearStats = year * 1; // 2021

    const plan = await tourModel.aggregate([
      {
        $unwind: '$startDates'
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${yearStats}-01-01`),
            $lte: new Date(`${yearStats}-12-31`)
          }
        }
      },
      {
        $group: {
          _id: { $month: '$startDates' }, //Nhóm theo tháng từ trường startDates
          numTourStarts: { $sum: 1 }, // Đếm số lượng tour trong mỗi tháng
          tours: { $push: '$name' } // Tạo mảng chứa tên của các tour
        }
      },
      {
        $addFields: { month: '$_id' }
      },
      {
        $project: {
          _id: 0
        }
      },
      {
        $sort: { numTourStarts: -1 }
      },
      {
        $limit: 12
      }
    ]);

    return plan
  }
}

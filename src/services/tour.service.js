

export default class TourService {
  constructor() { }

  static async getAllTours() {
    // thao tác với database
    return {
      msg: "All tours",
    };
  }

  static async createTour(tour) {
    // thao tác với database
    return {
      msg: "createTour",
    };
  }

  static async getTourById(id) {
    // thao tác với database
    return {
      msg: "getTourById",
    };
  }

  static async updateTourById(id, tour) {
    // thao tác với database
    return {
      msg: "updateTourById",
    };
  }

  static async deleteTourById(id) {
    // thao tác với database
    return {
      msg: "deleteTourById",
    };
  }
}


import { EmailAlreadyExistsError } from '../middlewares/errors.middleware.js';
import userModel from '../models/user.model.js';
import { Email } from '../utils/email.js';
import jwt from 'jsonwebtoken';

export default class AuthService {
  constructor() { }

  static async signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  }

  static async createSendToken(user, statusCode, req, res) {
    const token = await this.signToken(user._id);

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    // Remove password from output
    user.password = undefined;

    return {
      token,
      data: {
        user
      }
    };

  }

  static async signup(user, req, res) {
    // Lấy thông tin từ body : name, email, password, passwordConfirm
    // Kiểm tra xem email đã tồn tại chưa,có thì bào lỗi, chưa có tạo user mới

    const existingUser = await userModel.findOne({ email: user.email }).exec();
    if (existingUser) {
      throw new EmailAlreadyExistsError('Email is taken');
    }

    // Tạo user mới
    const newUser = await userModel.create(user);

    // Gửi email xác nhận tài khoản(nếu làm luồng này làm thêm 1 api active-bt về nhà) || Hoặc chào mừng tới ứng dụng
    const url = `/me`;
    await new Email(newUser, url).sendWelcome();

    // Viết hàm Send Token, lưu token vào cookie, gửi token về client
    return await this.createSendToken(newUser, 201, req, res);

  }

  static async accountActivation() {
    return {
      msg: "accountActivation success!"
    }
  }

  static async login() {
    return {
      msg: "login success!"
    }
  }

  static async logout() {
    return {
      msg: "logout success!"
    }
  }

  static async forgotPassword() {
    return {
      msg: "forgotPassword success!"
    }
  }

  static async resetPassword() {
    return {
      msg: "resetPassword success!"
    }
  }

  static async updatePassword() {
    return {
      msg: "updatePassword success!"
    }
  }
}

/* function test */


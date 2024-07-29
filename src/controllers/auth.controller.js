import { SuccessResponse } from "../middlewares/responses.middeware.js";
import AuthService from "../services/auth.service.js";

class AuthController {
  signup = async (req, res, next) => {
    new SuccessResponse({
      message: "signup success!",
      metadata: await AuthService.signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
      }, req, res)
    }).send(res)
  };

  accountActivation = async (req, res, next) => {
    new SuccessResponse({
      message: "accountActivation success!",
      metadata: await AuthService.accountActivation()
    }).send(res)
  };

  login = async (req, res, next) => {
    new SuccessResponse({
      message: "login success!",
      metadata: await AuthService.login()
    }).send(res)
  };

  logout = async (req, res, next) => {
    new SuccessResponse({
      message: "logout success!",
      metadata: await AuthService.logout()
    }).send(res)
  };

  forgotPassword = async (req, res, next) => {
    new SuccessResponse({
      message: "forgotPassword success!",
      metadata: await AuthService.forgotPassword()
    }).send(res)
  };

  resetPassword = async (req, res, next) => {
    new SuccessResponse({
      message: "resetPassword success!",
      metadata: await AuthService.resetPassword()
    }).send(res)
  }

  updatePassword = async (req, res, next) => {
    new SuccessResponse({
      message: "updatePassword success!",
      metadata: await AuthService.updatePassword()
    }).send(res)
  }

}

export default new AuthController();



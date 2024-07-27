const { body, validationResult } = require("express-validator");
const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");

const validateRegistration = [
  // Kiểm tra định dạng email
  body("email")
    .isEmail()
    .withMessage("Email không hợp lệ")
    .custom(async (value) => {
      const user = await Account.findOne({ email: value });
      if (user) {
        throw new Error("Email đã được sử dụng. Vui lòng sử dụng email khác.");
      }
      return true;
    }),
  // Kiểm tra mật khẩu
  body("password")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu phải có ít nhất 6 ký tự")
    .matches(/[A-Z]/)
    .withMessage("Mật khẩu phải có ít nhất một chữ cái in hoa")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Mật khẩu phải có ít nhất một ký tự đặc biệt"),
  // Kiểm tra tên người dùng
  body("username")
    .not()
    .isEmpty()
    .withMessage("Tên người dùng không được để trống")
    .custom(async (value) => {
      const user = await Account.findOne({ name: value });
      if (user) {
        throw new Error(
          "Tên người dùng đã tồn tại. Vui lòng chọn tên người dùng khác."
        );
      }
      return true;
    }),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    req.flash("errorMessages", errorMessages);
    req.flash(
      "errorregister",
      "Đăng kí thất bại. Vui lòng xem lại các trường đã nhập"
    );
  }
  next();
};

module.exports = { validateRegistration, handleValidationErrors };

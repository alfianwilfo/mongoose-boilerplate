const Helpers = require("../services/helpers");
const UserScheme = require("../schema/user");
const Mongo = require("../config/mongo");
const User = Mongo.model("user", UserScheme);
async function store(req, res, next) {
  try {
    let { email, password, username, fullname } = req.body;
    if (!email || !password || !username || !fullname) {
      throw new Error("All fields are required");
    }
    let hashPassword = await Helpers.hashPassword(password);
    await User.create({ email, password: hashPassword, username, fullname });
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  store,
};

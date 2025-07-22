const User = require("../Models/user");
const bcrypt = require("bcrypt");

exports.Signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPass });
    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Signup failed", details: err });
  }
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
      const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Login successful", user });
    }
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err });
  }
};

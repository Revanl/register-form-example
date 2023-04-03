//const User = require('../models/userModel');

const registerUser = (req, res) => {
  const request = req.body;

  // We can also use a model for processing our data before storing it on our server.
  //EXAMPLE

  // const { name, email } = req.body;

  // const user = await User.create({
  // 	name,
  // 	email,
  // })

  //return the data that was sent to the api
  res.status(201).json(req.body);
};

module.exports = {
  registerUser,
};

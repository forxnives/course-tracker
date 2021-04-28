var {User} = require('./userModel');

exports.createUser = async ({ email, password, firstName, lastName, departmentId }) => {
  try {
    const newUser = new User({
      email,
      firstName,
      lastName,
      // PLAINTEXT PASSWORD -> letmein
      password,
      departmentId
    })
    // pre save hook will run FIRST! (defined in userModel.js)

    const user = await newUser.save();
    return user;
  } catch(e) {
    throw e;
  }
}

exports.findUserByEmail = async (email) => {
  try {
    //find
    //findById

    const user = await User.findOne({ email })
    return user;
  } catch(e) {
    throw e;
  }
}

exports.findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    // return everything but password
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      departmentId: user.departmentId,
      isAdmin: user.isAdmin
    }
  } catch(e) {
    throw e;
  }
}


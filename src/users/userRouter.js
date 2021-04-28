const express = require('express');
const { createUser, findUserByEmail, findUserById } = require('./userController');
// NOT FROM TOKENSERVICE
const { verifyToken } = require('../middleware/verifyToken');
const { createToken } = require('../tokens/tokenService');
const router = express.Router();

router.route('/')
.post(async (req, res) => {

  const { firstName, lastName, email, password, departmentId } = req.body;


  if (!email || email === ' ') {
    res.status(400).json({message: 'email must be provided'});
    return;
  }

  if (!password || password === " ") {
    res.status(400).json({ message: "password must be provided" });
    return;
  }

  if (!firstName || firstName === " ") {
    res.status(400).json({ message: "first name must be provided" });
    return;
  }

  if (!lastName || lastName === " ") {
    res.status(400).json({ message: "last name must be provided" });
    return;
  }

  if (!departmentId || departmentId === ' ') {
    res.status(400).json({message: 'department must be provided'});
    return;
  }



  try {
    const foundUser = await findUserByEmail(email);
    if (foundUser) {
      res.status(400).json({message: `email ${email} already exists`});
      return;
    }
    // create the user in the db
    const user = await createUser({ email, password, firstName, lastName, departmentId });
    // we did it!!! send the id back to the FE
    // 200 By default!!
    res.json({ data: { id: user._id }});
  } catch(e) {
    console.log(e);
    // if (e.message.includes("duplicate key error")) {
    //   res.status(400).json({message: 'email already exists'})
    // }
      res.status(500).json({ message: "internal server error" });
  }
})

router.route('/login').post(async (req, res) => {

  const { email, password } = req.body;

  console.log(email)

  if (!email || email === ' ') {
    res.status(400).json({ message: 'email must be provided'});
    return;
  }
  if (!password || password === " ") {
    res.status(400).json({ message: "password must be provided" });
    return;
  }

  try {
    // from userController
    const user = await findUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: "Check fields and try again"});
      return;
    }
    // from userModel
    // does the password match the hash from the db?
    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      res.status(400).json({ message: 'Check fields and try again'});
      return;
    }
    // argument here will be the PAYLOAD of the token:
    const token = createToken({ id: user._id });
    // SET-COOKIE header being attached to response    



    // res.header('auth-token', token)

    // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true, sameSite: false })


    res.json({accessToken: token})


    // res.cookie('token2', token);



    // res.send({});

  } catch(e) {
    console.log(e);
  }
})

router.use(verifyToken).route('/me').post(async (req, res) => {



  try {

    
    const user = await findUserById(req.user.id);
    res.json({ data: user });
  } catch(e) {

  }
})







module.exports = router;
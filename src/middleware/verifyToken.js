const { verifyToken } = require('../tokens/tokenService');

exports.verifyToken = async (req, res, next) => {
  const { token } = req.body;
  console.log(req.body)


  try {

    if (!token) {
      res.status(403).json({ message: 'authorization required'});
      return;
    }
    // const token = cookies.token;
    // {id: someuserid }
    const userToken = await verifyToken(token);
    req.user = userToken;

    console.log('success?')
    next();
  } catch(e) {
    res.status(403).json({message: 'invalid or expired token'});
  }
}
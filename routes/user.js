const express = require("express");
const router = express.Router();

const { requireSignin } = require("../controllers/auth");


const {userById} = require("../controllers/user");

// Test route
// With this implementation once the user
// is logged in they can access (see) any
// other user's profile (much like Facebook for example)
router.get('/secret/:userId', requireSignin, (req, res) => {
  res.json({user: req.profile});
});

// If userId is encountered in the url
// call the userById function in user controllers
router.param("userId", userById);


module.exports = router;

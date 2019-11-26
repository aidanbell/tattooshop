const express = require('express');
const router = express.Router();
const apptsCtrl = require('../../controllers/appts');

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/create', apptsCtrl.create);
router.get('/:id', apptsCtrl.getAppt)

/*---------- Helper Functions ----------*/
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({
//     msg: 'Not Authorized'
//   });
// }

module.exports = router;
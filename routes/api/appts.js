const express = require('express');
const router = express.Router();
const apptsCtrl = require('../../controllers/appts');
const s3Ctrl = require('../../controllers/s3');

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/create', apptsCtrl.create);
router.get('/getArtistAppts/:id', apptsCtrl.getArtistAppts);
router.get('/getCustAppts/:id', apptsCtrl.getCustAppts);
router.patch('/:id/updateStatus', apptsCtrl.updateStatus);
router.patch('/:id/updateDate', apptsCtrl.updateDate);
router.post('/:id/uploadPhoto', s3Ctrl.uploadPhoto);
router.post('/:id/createMessage', apptsCtrl.createMessage);
router.get('/:id', apptsCtrl.getAppt);

/*---------- Helper Functions ----------*/
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({
//     msg: 'Not Authorized'
//   });
// }

module.exports = router;
const Appt = require('../models/appointment');

async function create(req, res) {
  const appt = new Appt(req.body);
  appt.user = req.user._id;
  try {
    await appt.save();
    res.json({
      appt
    });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

function getAppt(req, res) {
  const {
    id
  } = req.params

  return Appt.findById(id, (err, appt) => {
    if (err) return;
    return res.json(appt);
  })
}

function getArtistAppts(req, res) {
  const {
    id
  } = req.params
  debugger;
  return Appt.find({
    artist: id
  }, (err, appts) => {
    if (err) return;
    return res.json(appts);
  })
}


module.exports = {
  create,
  getAppt,
  getArtistAppts
}
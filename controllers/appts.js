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
  return Appt.find({
    artist: id
  }, (err, appts) => {
    if (err) return;
    return res.json(appts);
  })
}

function getCustAppts(req, res) {
  const {
    id
  } = req.params
  return Appt.find({
    user: id
  }, (err, appts) => {
    if (err) return;
    return res.json(appts);
  })
}

function updateStatus(req, res) {
  const {
    status,
    id
  } = req.body
  return Appt.findOneAndUpdate({
    _id: id
  }, {
    status: status
  }, {
    new: true
  }, (err, appt) => {
    if (err) return;
    return res.json(appt);
  })
}

function createMessage(req, res) {
  const {
    author,
    content
  } = req.body
  const {
    id
  } = req.params
  return Appt.findById(id, (err, appt) => {
    if (err) return;
    appt.messages.push(req.body)
    appt.save((err) => {
      return res.json(appt);
    })
  })
}

function updateDate(req, res) {
  console.log(req.body);
}

module.exports = {
  create,
  getAppt,
  getArtistAppts,
  getCustAppts,
  updateStatus,
  createMessage,
  updateDate
}
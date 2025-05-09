const User = require('../models/user.model.js');
const asyncHandler = require('../utils/asyncHandler');

const getLawyers = asyncHandler(async (req, res) => {
    const lawyers = await User.find({});
    res.render('pages/lawyers', { lawyers });
});

const viewLawyer = asyncHandler(async (req, res) => {
    const lawyer = await User.findById(req.params.id);
    if (!lawyer) {
        return res.status(404).send("Lawyer not found");
    }
    res.render('pages/lawyer-profile', { lawyer });
});

module.exports = {
    getLawyers,
    viewLawyer,
};
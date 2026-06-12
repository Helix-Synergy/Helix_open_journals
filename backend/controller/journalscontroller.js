const JournalsModel = require("../model/journalsmodel");

// POST: create journal
async function JournalsForm(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    const data = await JournalsModel.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Data sent successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

// GET: fetch all journals
async function GetJournalsForm(req, res) {
  try {
    const data = await JournalsModel.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      message: "Data fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = { JournalsForm, GetJournalsForm };

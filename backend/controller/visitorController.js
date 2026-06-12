const Visitor = require("../model/visitorModel");

exports.getVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1000 });
    }
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.incrementVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1001 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    res.status(200).json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

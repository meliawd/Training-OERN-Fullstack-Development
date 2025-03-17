module.exports = {
  index: (req, res) => {
    res.send("domisili mana");
  },

  home: (req, res) => {
    res.json({
      message: "API TEST",
    });
  },

  about: (req, res) => {
    res.json({
      name: "Rizky",
      job: "developer",
    });
  },
};

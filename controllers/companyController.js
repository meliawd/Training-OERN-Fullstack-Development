const sequelize = require("../database/dbConnection");
module.exports = {
  index: (req, res) => {
    res.send("Company Page");
  },

  getData: async (req, res) => {
    try {
      const [data, metadata] = await sequelize.query("SELECT * FROM COMPANY");
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  store: async (req, res) => {
    const { name, address } = req.body;
    try {
      const [data] = await sequelize.query(
        "INSERT INTO COMPANY (name, address) VALUES (:name, :address)",
        {
          replacements: { name, address },
        }
      );
      res.status(201).json({ message: "Data berhasil disimpan", data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDataByID: async (req, res) => {
    const { id } = req.params;
    try {
      const [data, metadata] = await sequelize.query(
        "SELECT * FROM COMPANY WHERE id = :id",
        {
          replacements: { id },
        }
      );
      if (data.length === 0) {
        return res
          .status(404)
          .json({ message: "Data Company tidak ditemukan" });
      } else {
        res.json(data[0]);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, address } = req.body;
    try {
      const [data, metadata] = await sequelize.query(
        "UPDATE COMPANY SET name = :name, address = :address WHERE id = :id",
        {
          replacements: { name, address, id },
        }
      );
      if (data.rowsAffected === 0) {
        return res
          .status(404)
          .json({ message: "Data Company tidak ditemukan" });
      } else {
        return res
          .status(201)
          .json({ message: "Data berhasil diupdate", data });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const [data, metadata] = await sequelize.query(
        "DELETE FROM COMPANY WHERE id = :id",
        {
          replacements: { id },
        }
      );
      if (data.rowsAffected === 0) {
        return res
          .status(404)
          .json({ message: "Data Company tidak ditemukan" });
      } else {
        return res.status(201).json({ message: "Data berhasil dihapus", data });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

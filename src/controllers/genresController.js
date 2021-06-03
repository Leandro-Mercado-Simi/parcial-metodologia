const db = require('../database/models');
const sequelize = db.sequelize;

const genresController = {
  list: (req, res) => {
    db.genre.findAll().then((genres) => {
      res.json(genres);
    });
  },
  detail: (req, res) => {
    db.genre.findByPk(req.params.id).then((genre) => {
      res.json(genre);
    });
  },
};

module.exports = genresController;

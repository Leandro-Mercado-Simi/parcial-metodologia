const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.genre.findAll()
            .then(genres => {
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;
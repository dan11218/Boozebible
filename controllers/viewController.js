module.exports = {
  show404(err, req, res, next) {
  res.sendStatus(404);
  },

  show406(err, req, res, next) {
  res.sendStatus(406);
  },
  
  showFavorites(req, res, next) {
    res.render('../views/favorites')
  }
}

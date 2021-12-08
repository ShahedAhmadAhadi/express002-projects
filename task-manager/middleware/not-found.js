const notFound = (req, res) => res.status(404).send('Route Not exist')

module.exports = notFound
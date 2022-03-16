const Status = require('http-status');

const optionsMiddleware = (req, res, next) => (req.method === 'OPTIONS' ? res.sendStatus(Status.OK) : next());

export default optionsMiddleware;

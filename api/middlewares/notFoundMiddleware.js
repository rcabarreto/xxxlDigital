const Status = require('http-status');

const notFoundMiddleware = (req, res) =>
  res.status(Status.NOT_FOUND).json({ message: 'Not Found', statusCode: Status.NOT_FOUND });

export default notFoundMiddleware;

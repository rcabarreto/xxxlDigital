const Status = require('http-status');

class UnknownEventError extends Error {
  constructor(...args) {
    super(...args);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, UnknownEventError);
  }
}

const responseMiddleware = (err, req, res, next) => {
  const isEmpty = (obj) => !Object.keys(obj).length;
  const isError = (obj) => obj instanceof Error;

  const SuccessResult = ({ payload }) =>
    res.status(Status.OK).json({
      message: 'Success',
      payload,
    });

  const ErrorResult = () => {
    const statusCode = err instanceof UnknownEventError ? Status.UNPROCESSABLE_ENTITY : Status.INTERNAL_SERVER_ERROR;
    const message = err instanceof UnknownEventError ? err.message : 'Internal Server Error';
    res.status(statusCode).json({ statusCode, message });
  };

  if (isError(err) || !isEmpty(err)) {
    ErrorResult();
  } else {
    SuccessResult(res.locals);
  }
};

export default responseMiddleware;

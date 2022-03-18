import * as api from '../services/api';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const productsController = {
  getProducts: async (req, res, next) => {
    const productList = await api.getProducts().catch((error) => {
      next(error);
    });

    await sleep(1000);

    res.locals.payload = productList;
    next({});
  },
};

export default productsController;
